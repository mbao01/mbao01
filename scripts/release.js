import { git, lerna, enforceCleanWorkingDirectory } from "./_init.js";
import { log, actor, primary, success, COMMIT_MSGS } from "./_utils.js";

/**
 *
 */
(async function () {
  const MAIN_BRANCH = "main"; // TODO: main branch name is hardcoded here

  /* 1. first some chores */
  // 1a. this is a safety measure to ensure releases are only published from the main branch
  await actor(
    git.branch().then((b) => {
      if (b.current !== MAIN_BRANCH)
        throw new Error(
          `You can only perform releases from ${primary(MAIN_BRANCH)} branch`
        );
    }),
    `Check current branch is ${MAIN_BRANCH}`
  );

  // 1b. ensure the working directory is clean. this is a safety measure to ensure
  // you don't accidentally commit untracked files or uncommitted changes
  await actor(
    enforceCleanWorkingDirectory(),
    "Ensure there are no untracked files or uncommitted changes"
  );

  // 1c. set git user email
  await actor(
    git.raw(["config", "user.email", process.env.EMAIL]),
    "Set repo github email"
  );

  // 1d. set git user name
  await actor(
    git.raw(["config", "user.name", process.env.NAME]),
    "Set repo github name"
  );

  /* 2. retrieve all commit logs from the latest tagged release */
  // 2a. get all tags
  const tags = await actor(git.tags(), "Get all tags");

  // 2b. get logs from most recent tag to HEAD
  const logs = await actor(
    git.log({
      format: "format:%s",
      from: tags.latest?.hash,
      multiLine: false,
    }),
    "Retrieve logs from most recent tag to HEAD"
  );

  /* 2c. check if there is a release pending since the last tagged release */
  // if there is no release pending, throw an error which ends the process
  await actor(
    new Promise((resolve, reject) => {
      const pendingRelease = logs.all.some((log) =>
        log.message.includes(COMMIT_MSGS.RELEASE)
      );
      if (pendingRelease) {
        resolve();
      } else {
        reject(
          new Error(
            "There is no release prepared since the last tagged release"
          )
        );
      }
    }),
    "Release pending since last tagged release"
  );

  /* 3. publish release */
  // 3a. get changed packages since last tagged release
  const changedPackages = await actor(
    lerna
      .changed(undefined, { "--json": true }, { stdio: "pipe" })
      .then(({ stdout }) => JSON.parse(stdout)),
    "Changed packages since last tagged release"
  );
  const packageTags = changedPackages.map(
    ({ name, version }) => `${name}@v${version}`
  );

  // 3b. create annotated tags for each changed package
  await Promise.all(
    packageTags.map((packageTag) =>
      actor(
        git.addAnnotatedTag(packageTag, `${COMMIT_MSGS.TAG} ${packageTag}`),
        `Create ${packageTag} annotated tag`
      )
    )
  );

  // 3c. publish changed packages to npm
  await actor(
    lerna.publish(["from-package"], { "--amend": true }),
    "Publish packages to npm registry"
  );

  // 3d. push annotated tags and commits to remote
  await actor(
    git.push({ "--follow-tags": true }),
    "Push annotated tags and commits to remote"
  );

  // 3e. create release on github
  await actor(
    $({
      stdio: "inherit",
    })`gh release create ${packageTags[0]} --generate-notes`,
    `Create release on github`
  );

  /* 4. hey! we are done now 🚀 */
  log(`\nProjects released successfully 🥁🥁🥁🥁: Here is the list\n`);
  changedPackages.forEach(({ name, version }, index) =>
    log(`${index + 1}.\t ${primary(name)} - v${success.bold(version)}\n`)
  );
  log(success.bold("\n\nEnd\n\n"));
})();
