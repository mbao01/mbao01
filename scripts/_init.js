import { simpleGit, CleanOptions } from "simple-git";
import { Lerna } from "./lerna.js";
import { DIR_NAME, actor } from "./_utils.js";

// setup lerna
export const lerna = new Lerna(DIR_NAME);

// setup git
export const git = await simpleGit({
  baseDir: DIR_NAME,
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
});

// 0. ensure the working directory is clean. this is a safety measure to ensure
// you don't accidentally commit untracked files or uncommitted changes
await actor(git.clean(CleanOptions.DRY_RUN), "Setup git in clean workspace");
await actor(
  git.status({ "--porcelain": true }).then((r) => {
    if (!r.isClean())
      throw new Error(
        "Untracked files or uncommitted changes detected. Please clean/stash your working directory."
      );
    return r;
  }),
  "Ensure there are no untracked files or uncommitted changes"
);
