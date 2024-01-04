/** @module Lerna */

import path from "path";
import { execa } from "execa";

/**
 * return lerna binary path
 * @param {string} cwd
 * @returns {string}
 */
export const getLernaBinary = async (cwd) => {
  const { stdout } = await execa("pnpm", ["bin"], { cwd });
  return path.join(stdout, "lerna");
};

/**
 * This method does...
 *
 * @method
 * @name Lerna#bbb
 * @param {string} whatever Whatever this is.
 * @returns {Object} Description of return value.
 * @throws {SomeException} blah.
 */

/**
 * @classdesc Not a real class but an interface. Etc...
 *
 * @name Lerna
 * @class
 */
export class Lerna {
  #cmds = [
    "run",
    "diff",
    "info",
    "list",
    "clean",
    "changed",
    "publish",
    "version",
  ];

  constructor(cwd, defaultConfig = {}) {
    this.#cmds.forEach((cmd) => {
      /**
       * @param {string[]} [args]
       * @param {Record<string, unknown>} [options]
       * @param {Record<string, unknown>} [config]
       * @returns
       */
      this[cmd] = async (args = [], options = {}, config = {}) => {
        const bin = await getLernaBinary(cwd);
        const opts = Object.entries(options)
          .map(([key, value]) => {
            if (!value) return null;
            if (typeof value === "string") return `${key}=${value}`;
            return `${key}`;
          })
          .filter(Boolean);
        return execa(bin, [cmd, ...args, ...opts], {
          stdio: "inherit",
          ...defaultConfig,
          ...config,
        }).then((response) => {
          if (response.exitCode !== 0)
            throw new Error(`Failure running "lerna ${cmd}" command`);
          return response;
        });
      };
    });
  }

  /**
   * Run an npm script in each package that contains that script
   * @method
   * @param {[string]} [args]
   * @param {Record<"--stream" | "--parallel" | "--npm-client" | "--no-bail" | "--no-prefix" | "--profile" | "--profile-location" | "--load-env-files" | "useNx", string | boolean>} [options]
   * @returns Promise<string>
   */
  run(args, options) {}

  /**
   * Diff all packages or a single package since the last release
   * @method
   * @param {[string]} [args]
   * @returns Promise<string>
   */
  diff(args) {}

  /**
   * Print local environment information
   * @method
   * @returns Promise<string>
   */
  info(args, options) {}

  /**
   * List packages in the current project.
   * @method
   * @param {undefined} [args]
   * @param {Record<"--json" | "--ndjson" | "--all" | "--long" | "--parseable" | "--toposort" | "--graph", string | boolean>} [options]
   * @returns Promise<string>
   */
  list(args, options) {}

  /**
   * Remove the node_modules directory from all packages
   * @method
   * @param {undefined} [args]
   * @param {Record<"--allow-branch" | "--amend" | "--build-metadata" | "--changelog-preset" | "--changelog-entry-additional-markdown" | "--conventional-commits" | "--conventional-graduate" | "--force-conventional-graduate" | "--conventional-prerelease" | "--conventional-bump-prerelease" | "--create-release" | "--exact" | "--force-publish" | "--git-tag-command" | "--git-remote" | "--ignore-changes" | "--ignore-scripts" | "--include-merged-tags" | "--json" | "--message" | "--no-changelog" | "--no-commit-hooks" | "--no-git-tag-version" | "--no-granular-pathspec" | "--no-private" | "--no-push" | "--npm-client-args" | "--preid" | "--premajor-version-bump" | "--run-scripts-on-lockfile-update" | "--signoff-git-commit" | "--sign-git-commit" | "--sign-git-tag" | "--sync-dist-version" | "--force-git-tag" | "--tag-version-prefix" | "--yes", string | boolean>} [options]
   * @returns Promise<string>
   */
  clean(args, options) {}

  /**
   * List local packages that have changed since the last tagged release
   * @method
   * @param {undefined} [args]
   * @param {Record<"--json" | "--ndjson" | "--all" | "--long" | "--parseable" | "--toposort" | "--graph" | "--conventional-graduate" | "--force-conventional-graduate" | "--force-publish" | "--ignore-changes" | "--include-merged-tags", string | boolean>} [options]
   * @returns Promise<string>
   */
  changed(args, options) {}

  /**
   * Publish packages in the current project.
   * @method
   * @param {["from-git" | "from-package"]} [args]
   * @param {Record<"--allow-branch" | "--amend" | "--build-metadata" | "--changelog-preset" | "--changelog-entry-additional-markdown" | "--conventional-commits" | "--conventional-graduate" | "--force-conventional-graduate" | "--conventional-prerelease" | "--conventional-bump-prerelease" | "--create-release" | "--exact" | "--force-publish" | "--git-tag-command" | "--git-remote" | "--ignore-changes" | "--include-merged-tags" | "--json" | "--message" | "--no-changelog" | "--no-commit-hooks" | "--no-git-tag-version" | "--no-private" | "--no-push" | "--npm-client-args" | "--premajor-version-bump" | "--run-scripts-on-lockfile-update" | "--signoff-git-commit" | "--sign-git-commit" | "--sign-git-tag" | "--sync-dist-version" | "--force-git-tag" | "--canary" | "--contents" | "--dist-tag" | "--git-head" | "--ignore-scripts" | "--ignore-prepublish" | "--include-private" | "--legacy-auth" | "--no-git-reset" | "--no-granular-pathspec" | "--verify-access" | "--otp" | "--preid" | "--pre-dist-tag" | "--registry" | "--tag-version-prefix" | "--temp-tag" | "--yes" | "--summary-file", string | boolean>} [options]
   * @returns Promise<string>
   */
  publish(args, options) {}

  /**
   * Bump version of packages changed since the last release
   * @method
   * @param {["major" | "minor" | "patch" | "premajor" | "preminor" | "prepatch" | "prerelease"]} [args]
   * @param {Record<"--allow-branch" | "--amend" | "--build-metadata" | "--changelog-preset" | "--changelog-entry-additional-markdown" | "--conventional-commits" | "--conventional-graduate" | "--force-conventional-graduate" | "--conventional-prerelease" | "--conventional-bump-prerelease" | "--create-release" | "--exact" | "--force-publish" | "--git-tag-command" | "--git-remote" | "--ignore-changes" | "--ignore-scripts" | "--include-merged-tags" | "--json" | "--message" | "--no-changelog" | "--no-commit-hooks" | "--no-git-tag-version" | "--no-granular-pathspec" | "--no-private" | "--no-push" | "--npm-client-args" | "--preid" | "--premajor-version-bump" | "--run-scripts-on-lockfile-update" | "--signoff-git-commit" | "--sign-git-commit" | "--sign-git-tag" | "--sync-dist-version" | "--force-git-tag" | "--tag-version-prefix" | "--yes", string | boolean>} [options]
   * @returns Promise<string>
   */
  version(args, options) {}
}
