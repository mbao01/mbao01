import { $ } from "execa";
import { git } from "./_init.js";
import { primary, actorPromise, convertToNestedArrays } from "./_utils.js";

/**
 * Steps:
 *
 * 1. ensure you have github cli installed (see https://github.com/cli/cli#installation)
 * 2a. run `gh auth login` to authenticate the GitHub CLI with your GitHub account, OR
 * 2b. set GITHUB_TOKEN environment variable in your shell
 */

(async function () {
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
  ("@mbao01/ui@v0.0.2");
  const title = convertToNestedArrays(
    branch.current.replace("releases/", "").split("@v")
  )
    .map((arr) => arr.join(" v"))
    .join(", ");
  await actorPromise(
    $({
      stdio: "inherit",
    })`gh pr create --fill --title ${`Releases ${title}`} --label ${"release"}`,
    `Create pull request for ${primary(branch.current)} branch`
  );
})();

// 3. If you're not already in the directory for the project which you want to open
// a pull request for, `cd` there now and check with `git status` that all of your
// changes are committed in your branch.

// 4. Run the command `gh pr create` and watch the magic unfold in front of your :eyes: !
