import { simpleGit, CleanOptions } from "simple-git";
import { Lerna } from "./lerna.js";
import { DIR_NAME, actor, actorPromise } from "./_utils.js";

// setup lerna
export const lerna = new Lerna(DIR_NAME);

// setup git
export const git = await simpleGit({
  baseDir: DIR_NAME,
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
});

// setup git in clean workspace
await actorPromise(
  git.clean(CleanOptions.DRY_RUN),
  "Setup git in clean workspace"
);

/**
 * ensure there are no untracked files or uncommitted changes in working directory
 * @returns Promise<SimpleGit>
 */
export const enforceCleanWorkingDirectory = async () =>
  git.status({ "--porcelain": true }).then((r) => {
    if (!r.isClean())
      throw new Error(
        "Untracked files or uncommitted changes detected. Please clean/stash your working directory."
      );
    return r;
  });

/**
 * remove all untracked files or uncommitted changes in working directory
 * @returns Promise<SimpleGit>
 */
export const cleanWorkingDirectory = async () => {
  await git.raw(["reset", "--hard", "HEAD"]);
  await git.clean([CleanOptions.FORCE, CleanOptions.RECURSIVE]);
}
