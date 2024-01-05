### Hi there 👋

<!--
**mbao01/mbao01** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

---

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This workspace is managed by [pnpm](https://pnpm.io/cli/run) and [Lerna](https://lerna.js.org/). It follows the [semantic versioning](https://semver.org/) using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) - all orchestrated by lerna.

## Preparing for release
Ensure you are on a feature branch. You'd then need to create a pull request for the feature branch to `main`. After all the review ceremonies are complete you then proceed with the following steps. ⛔️⛔️⛔️ NOTE: DO NOT MERGE THE PR!!!!!

### Steps to prepare release
1. In your local repo, checkout to your feature branch
2. Ensure your working directory is clean (stash any untracked or uncommitted changes)
3. Prepare your changes for release by running;
```sh
pnpm release:prepare
```
If the command above is run successfully, you'd be automatically checkout to the release branch (i.e `releases/*`).

4. On the release branch, create a PR to `main` by running;
```sh
pnpm release:pr
```
The command above will automatically create a pull request targeting `main` from your release branch.

After all review ceremonies on the release pull request are complete, merge to master. ⛔️⛔️⛔️ NOTE: DO UPDATE THE RELEASE BRANCH DIRECTLY. You should update your feature branch instead then star from Step 1.

### Steps to publish
1. Merge your release pull request to main once ready. This will kickstart the release workflow in the CI - which publishes changed packages to npm and creates tagged releases with notes. As a side effect, your feature branch pull request will be automatically closed.
2. After the release workflow is successful, confirm your [release](https://github.com/mbao01/mbao01/releases) and published packages on npm.
