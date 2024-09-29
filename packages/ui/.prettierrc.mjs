/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  printWidth: 100,
  singleQuote: false,
  trailingComma: "es5",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  rangeEnd: null,
  rangeStart: 0,
  importOrder: [
    "<TYPES>^(node:)",
    "<TYPES>",
    "^react.*",
    "^next$",
    "^next/.*$",
    "^@radix-ui/(.*)$",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "<TYPES>^[.]",
    "^[.]",
  ],
};

export default config;
