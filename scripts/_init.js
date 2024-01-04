import path from "path";
import chalk from "chalk";
import ora, { oraPromise } from "ora";
import { fileURLToPath } from "url";
import { simpleGit, CleanOptions } from "simple-git";
import { Lerna } from "./lerna.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.dirname(__filename), "..");

const PROTECTED_BRANCHES = [/^main$/gi, /^(releases)\/.+$/gi];

const log = process.stdout.write.bind(process.stdout);
const info = chalk.blue;
const error = chalk.bold.red;
const warning = chalk.hex("#ffa500");
const success = chalk.green;
const primary = chalk.hex("#8405ab");
const secondary = chalk.hex("#058aab");
const trap = (err) => {
  log(error(err.message?.trimEnd()) + "\n");
  process.exit(1);
  return false;
};

const actorPromise = async (promise, text) => {
  const notify = ora({
    text: info(text),
    isEnabled: false,
    stream: process.stdout,
  }).start();
  return await promise
    .then(() => notify.succeed(`${text} ${success(" - done")}`))
    .catch((err) => {
      notify.fail(`${text} ${error("-")} ${error.bgWhite("failed")}`);
      trap(err);
    });
};

const actor = (promise, text) =>
  oraPromise(promise, {
    text: info(text),
    failText: `${text} ${error("-")} ${error.bgWhite("failed")}`,
    successText: `${text} ${success(" - done")}`,
  }).catch(trap);

// setup git
const git = await simpleGit({
  baseDir: __dirname,
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

// setup lerna
const lerna = new Lerna(__dirname);

export {
  // color output functions
  info,
  error,
  warning,
  success,
  primary,
  secondary,

  // functions
  git,
  log,
  lerna,
  actor,
  actorPromise,

  // constants
  PROTECTED_BRANCHES,
  __dirname,
};
