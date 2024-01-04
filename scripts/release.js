import { git } from "./_init.js";

/**
 *
 */
export async function release() {
  // get current branch
  const branch = await git.branch();
  console.log("Branch: ", branch);
}

release();
