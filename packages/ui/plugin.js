const plugin = require("tailwindcss/plugin");
const config = require("./tailwind.config");

const { theme, plugins, daisyui } = config;

module.exports = plugin(() => null, {
  theme,
  plugins,
  daisyui,
});
