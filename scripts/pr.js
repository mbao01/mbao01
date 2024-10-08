import { $ } from "execa";
import { git } from "./_init.js";
import {
  primary,
  actor,
  actorPromise,
  convertToNestedArrays,
  PACKAGE_NAME_SEPARATOR,
} from "./_utils.js";

/**
 * creates a pull request for a release branch
 */
(async function () {
  const REMOTE_NAME = "origin";

  /* 1. we begin by doing some chores */
  // 1a. all further tasks must be performed from the root git directory
  const isRepoRoot = await git.checkIsRepo("root");

  // 1b. you want all future tasks to run from the root directory - switch to the
  // root git directory if not already there
  if (!isRepoRoot) await git.cwd({ path: __dirname, root: true });

  // 1c. get current branch
  const branch = await git.branch();

  // 1d. keep remote in sync with local - this step is performed to ensure
  // local commits are pushed to remote
  await actorPromise(
    git.push(),
    "Push current branch to remote to keep in sync"
  );

  /* 2. now we create pr */
  // 2a. get parent branch name (it is expected that the parent branch owns the previous second commit in this release branch)
  const parentBranchName = (await git.log({ maxCount: 2 })).all[1]?.refs
    .split(", ")[0]
    ?.replaceAll(`${REMOTE_NAME}/`, "");
  const parentPr = await actor(
    $({
      stdio: "pipe",
    })`gh pr view ${parentBranchName} --json ${"url,title,body"}`.then(
      ({ stdout }) => JSON.parse(stdout)
    ),
    `Retrieve details for parent PR (${primary(parentBranchName)} branch)`
  );
  const parentPrBody = parentPr.body.replaceAll("\\n", "<br />");

  // 2b. prepare pr title and body
  const prTitle = branch.current
    .replace("releases/", "")
    .split(PACKAGE_NAME_SEPARATOR)
    .join(", ");
  const prBody = `Releases ${parentPr.url}\n\n<details><summary>Details</summary><p>\n\n${parentPrBody}\n\n</p></details>`;

  // 2c. create pr
  await actorPromise(
    $({
      stdio: "inherit",
    })`gh pr create --fill --title ${`Releases ${prTitle}`} --label ${"release"} --body ${prBody}`,
    `Create pull request for ${primary(branch.current)} branch`
  );
})();
