import path from "path";
import chalk from "chalk";
import ora, { oraPromise } from "ora";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
export const DIR_NAME = path.join(path.dirname(__filename), "..");

export const PROTECTED_BRANCHES = [/^main$/gi, /^(releases)\/.+$/gi];

export const COMMIT_MSGS = {
  BASE: "chore(release):", // release commit message prefix
  RELEASE: "chore(release): prepare", // commit message to prepare release (temporary name, indicates release is pending)
  PUBLISH: "chore(release): publish", // commit message to publish release (indicates release is published)
  TAG: "chore(release): tagged", // commit message to tag release (only used with annotated tags)
};

/* color output functions */
export const info = chalk.blue;
export const error = chalk.bold.red;
export const warning = chalk.hex("#ffa500");
export const success = chalk.green;
export const primary = chalk.hex("#8405ab");
export const secondary = chalk.hex("#058aab");

/* logging function */
export const log = process.stdout.write.bind(process.stdout);

/**
 * trap errors and exit process
 * @param {unknown} err
 * @returns
 */
export const trap = (err) => {
  log(error(err.message?.trimEnd()) + "\n");
  process.exit(err.exitCode ?? 1);
  return false;
};

/**
 * calls oraPromise with custom text
 * @param {Promise<unknown>} promise
 * @param {string} [text]
 * @returns
 */
export const actor = (promise, text) =>
  oraPromise(promise, {
    text: info(text),
    failText: `${text} ${error("-")} ${error.bgWhite("failed")}`,
    successText: `${text} ${success("- done")}`,
  }).catch(trap);

/**
 * custom promise actor - a wrapper around ora to handle promise
 * @param {Promise<unknown>} promise
 * @param {string} [text]
 * @returns
 */
export const actorPromise = async (promise, text) => {
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

/**
 * build PR link for repo
 * @param {string} repo
 * @param {string} branchName
 */
export const buildPRUrl = (repo, branchName) => {
  const project = repo.split(":")[1].replace(".git", "");
  const url = `https://github.com/${project}/pull/new/${branchName}`;
  return url;
};

/**
 * log release preparation final steps
 * @param {string} releaseBranchName
 * @param {string} mainBranchName
 * @param {string} prUrl
 */
export const logFinalSteps = (releaseBranchName, mainBranchName, prUrl) => {
  log(
    `\n${secondary.underline(
      "Final step"
    )} 🥁: Create a pull request from ${primary(
      releaseBranchName
    )} to ${primary(mainBranchName)} branch \n`
  );
  log(`1. Manually - by visiting ${success.bold(prUrl)}\n`);
  log(`${info.bold("OR")}\n`);
  log(`2. Automatically - by running ${warning.bold("pnpm release:pr")}\n`);
};
