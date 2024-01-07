import { $ } from "execa";
import {
  git,
  lerna,
  cleanWorkingDirectory,
  enforceCleanWorkingDirectory,
} from "./_init.js";
import { log, actor, primary, success, COMMIT_MSGS } from "./_utils.js";

/**
 * this publishes packages to npm and creates a release on github
 */
(async function () {
  const MAIN_BRANCH = "main"; // TODO: main branch name is hardcoded here

  /* 1. first some chores */
  // 1a. ensure the working directory is clean. this is a safety measure to ensure
  // you don't accidentally commit untracked files or uncommitted changes
  await actor(cleanWorkingDirectory(), "Clean working directory");
  await actor(
    enforceCleanWorkingDirectory(),
    "Ensure there are no untracked files or uncommitted changes"
  );

  // 1b. set git user email
  await actor(
    git.raw(["config", "user.email", process.env.EMAIL]),
    "Set repo github email"
  );

  // 1c. set git user name
  await actor(
    git.raw(["config", "user.name", process.env.NAME]),
    "Set repo github name"
  );

  // 1d. keep local branches in up to date with remote, fetch all branches and
  // tags from remote
  await actor(git.fetch(), "Fetch all branches and tags from remote");

  /* 2. retrieve and check tag */
  // 2a. get current tag name
  const tagName = (
    await actor(
      git.raw(["describe", "--exact-match", "--tags", "HEAD"]),
      "Retrieve current HEAD tag name"
    )
  )?.trim();

  // 2b. ensure tag is on `main`. could be on other branches too, we don't care
  await actor(
    git.branch({ "-r": true, "--contains": tagName }).then(({ all }) => {
      const isMainBranch = all.some(
        (branch) => branch === `origin/${MAIN_BRANCH}`
      );
      if (!isMainBranch)
        throw new Error(
          `Tag ${primary(tagName)} is not on ${primary(MAIN_BRANCH)} branch`
        );
    }),
    `Ensure ${primary(MAIN_BRANCH)} branch is tagged ${primary(tagName)}`
  );

  /* 3. publish and release */
  // 3a. publish changed packages to npm
  await actor(
    lerna.publish(["from-package"], {
      "--yes": true,
      "--amend": true,
    }),
    "Publish packages to npm registry"
  );

  // 3b. create release on github
  await actor(
    $({
      stdio: "inherit",
    })`gh release create ${packageTags[0]} --generate-notes`,
    `Create release on github`
  );

  /* 4. hey! we are done now 🚀 */
  log(
    `\nPackages have been published successfully 😮‍💨: Here is the publish tag ${primary(
      tagName
    )}\n`
  );
  log(success.bold("\n\nTake a break now 🍻\n\n"));
})();
