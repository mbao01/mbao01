import { info, log, primary, secondary, success, warning } from "./_init";

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
