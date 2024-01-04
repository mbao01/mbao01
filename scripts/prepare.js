/**
 * This script is run before a release is created. It is used to prepare the project for release.
 */

import { git, lerna } from "./_init.js";
import {
  primary,
  secondary,
  actor,
  actorPromise,
  buildPRUrl,
  PROTECTED_BRANCHES,
} from "./_utils.js";

/**
 *
 */
(async function () {
  /* 1. we begin by doing some chores */
  // 1a. assign remote name and main branch
  // log(info("Assign remote name and main branch"));
  const [REMOTE, MAIN_BRANCH] = (
    await actor(
      git.revparse(["--abbrev-ref", "origin/HEAD"]),
      "Assign remote name and main branch"
    )
  ).split("/");

  // 1b. all further tasks must be performed from the root git directory
  const isRepoRoot = await git.checkIsRepo("root");

  // 1c. you want all future tasks to run from the root directory - switch to the
  // root git directory if not already there
  if (!isRepoRoot) await git.cwd({ path: __dirname, root: true });

  // 1d. get current branch
  const branch = await git.branch();

  /* 2. checks and balances */
  // 2a. keep local branches in up to date with remote, fetch all branches and
  // tags from remote
  await actor(git.fetch(), "Fetch all branches and tags from remote");

  // 2b. ensure current branch is not a protected branch
  // `main` and `releases/*` branches are protected therefore you cannot prepare
  // a release directly from them
  await actor(
    new Promise((resolve, reject) => {
      if (PROTECTED_BRANCHES.every((b) => b.test(branch.current)))
        return reject(
          new Error(
            `Cannot prepare release from current branch (${primary(
              branch.current
            )}) branch`
          )
        );
      return resolve();
    }),
    `Ensure current branch (${primary(
      branch.current
    )}) is not a protected branch`
  );

  // 2c. ensure current branch definitely has an upstream branch and mirrors it
  await actor(git.pull(), "Sync current branch with remote");

  // 2d. rebase with main branch to ensure current branch is in sync
  // i.e up to date and with no merge conflicts
  await actor(
    git.rebase([MAIN_BRANCH]),
    `Rebase current branch with ${MAIN_BRANCH}`
  );

  // 2e. ensure there are commits to version/release since last release
  const commits = await git.log({ maxCount: 1 });
  await actor(
    new Promise((resolve, reject) => {
      if (commits?.latest?.message?.startsWith("chore(release): publish"))
        return reject(
          new Error(
            `Cannot proceed to create a version because there are no new commits from the last release (${primary(
              `hash: ${commits.latest.hash}`
            )})`
          )
        );
      return resolve();
    }),
    "Check if there are commits to version"
  );

  // 2f. keep remote in sync with local - this step is performed to ensure
  // local commits are pushed to remote
  await actor(git.push(), "Push current branch to remote to keep in sync");

  /* 3. project versioning and release branch creation */
  // 3a. version changed packages using `lerna version` without tagging or committing.
  // creating the actual release (and tagging) will be done in CI after the release PR is merged
  await actorPromise(
    lerna.version(undefined, {
      "--yes": true,
      "--json": true,
      "--no-push": true,
      "--no-git-tag-version": true,
      "--conventional-commits": true,
      "--changelog-preset": "conventionalcommits",
      "--allow-branch": branch.current,
    }),
    "Versioning your projects and creating changelog"
  );

  // 3b. get list of changed packages
  const packages = await actor(
    lerna
      .changed(undefined, { "--json": true }, { stdio: "pipe" })
      .then(({ stdout }) => JSON.parse(stdout)),
    "Build list of changed packages"
  );

  /* 4. create release branch */
  // 4a. create release branch with name derived form list of changed packages
  const namedPackages = packages.map(
    ({ name, version }) => `${name}@v${version}`
  );
  const releaseBranchName = "releases/" + namedPackages.join(":");
  await actor(
    git.checkoutLocalBranch(releaseBranchName),
    `Create release branch (${primary(releaseBranchName)}) from ${
      branch.current
    } branch`
  );

  // 4b. commit new/updated release artifacts to release branch
  await actor(
    git.add("./*"),
    `Add all files to ${primary(releaseBranchName)} branch`
  );
  const packageList = namedPackages.join("\n- ");
  const commitMsg = `chore(release): publish \n\n- ${packageList}`;
  await actor(
    git.env("HUSKY", "0").commit(commitMsg),
    `Commit changelog and package bump on ${primary(releaseBranchName)} branch`
  );

  // 4c. push release branch to remote
  const { repo } = await actor(
    git.push(["-u", REMOTE, releaseBranchName]),
    `Push ${primary(releaseBranchName)} branch to remote`
  );

  /* 5. hey! we are done now ✅ */
  // 5a. create PR url for release branch
  const prUrl = buildPRUrl(repo, releaseBranchName);

  // 5b. log final step instruction
  logFinalSteps(releaseBranchName, MAIN_BRANCH, prUrl);
})();

// --- Local script
// 1. pull target remote branch (main)
// 2. pull all remote tags
// 3. rebase source branch with `main`
// [] - ensure project checks and pipeline succeed against `main` before versioning
// 4. version current project using `lerna version` without committing
// 5. update CHANGELOG.md
// 6. commit change with `vM.m.p commit message`
// [] - ensure cannot add new commits on top of `vM.m.p` commit for the same branch. Basically `vM.m.p` on a branch basically means the branch is closed to modification.
// [] - in case of modification, warn the user and present 3 options. this will be presented on every commit after the `vM.m.p` commit A. tagged commit will become the latest commit and you'd be able to edit it before pushing i.e - remove tag locally, - uncommit commit, - allow editing commit i.e change log, tag latest commit with same or editable message, force push tag to remote if previous tag commit is same as master, otherwise fail stating that there is a version conflict B. cancel action.
// 7. push changes to remote
// 8. create pull request to `main` with a checkbox to allow auto release e.g - [x] Automatically release after merging
// [] - ensure that the release associated with the source branch is not less than (or before) the latest release on `main` following semvar rules.
// 9. After PR is reviewed, approved and merged

// --- Github actions
// If *Automatically release after merging* is checked then 10 to 14 is automated, otherwise proceed manually to 10.

// 10. Create PR from `main` to `release` branch
// 11. PR description should include version number and PR that adds the code.
// 12. After merging `master` into `release` branch, **run github action to tag and publish release**

// --Github actions
// [] - ensure project checks and pipeline succeed
// 13. tag latest commit on `main` with annotation
// 14. build and publish `release` branch to npm
