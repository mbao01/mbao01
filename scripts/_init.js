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
