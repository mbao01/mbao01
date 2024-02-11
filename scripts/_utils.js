import path from "path";
import chalk from "chalk";
import ora, { oraPromise } from "ora";
import { fileURLToPath } from "url";
import readline from "node:readline/promises";

const __filename = fileURLToPath(import.meta.url);
export const DIR_NAME = path.join(path.dirname(__filename), "..");

export const PROTECTED_BRANCHES = [/^main$/gi, /^(releases)\/.+$/gi];

export const PACKAGE_NAME_SEPARATOR = "/.";

const SEMVER_BUMPS = [
  "major",
  "minor",
  "patch",
  "premajor",
  "preminor",
  "prepatch",
  "prerelease",
];

export const COMMIT_MSGS = {
  BASE: "chore(release):", // release commit message prefix
  RELEASE: "chore(release): prepare", // commit message to publish release (indicates release is that is pending if not already published)
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
    .then((res) => {
      notify.succeed(`${text} ${success(" - done")}`);
      return res;
    })
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
 * prompts user for semver bump
 * @returns {"major" | "minor" | "patch" | "premajor" | "preminor" | "prepatch" | "prerelease"}
 */
export const promptSemverBump = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(
    `Type in a semver bump (defaults to ${primary(
      "patch"
    )})?\nCan only be one of ${SEMVER_BUMPS.map((bump) => primary(bump)).join(
      " | "
    )}: `
  );
  let semverBump = answer.trim().toLowerCase();
  if (!SEMVER_BUMPS.includes(semverBump)) semverBump = "patch";
  rl.close();
  log(`${info("Semver Bump:")} ${primary(semverBump)}\n`);

  return semverBump;
};


/**
 * converts an array to nested arrays with element pairs
 * @param {string[]} data
 * @returns
 */
export const convertToNestedArrays = (data)=> {
  const nestedArrays = [];
  for (let i = 0; i < data.length; i += 2) {
      nestedArrays.push(data.slice(i, i + 2));
  }
  return nestedArrays;
}