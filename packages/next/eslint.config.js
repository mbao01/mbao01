import { FlatCompat } from "@eslint/eslintrc";

const __dirname = import.meta.dirname;

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: __dirname,
});

// global ignores
const globalIgnores = {
  ignores: ["!.storybook", ".next", "dist", "coverage", "storybook-static"],
};

const nextEslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
];

const configs = [globalIgnores, ...nextEslintConfig];

export default configs;
