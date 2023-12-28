const plugin = require("tailwindcss/plugin");
const config = require("./tailwind.config");

module.exports = plugin.withOptions(
  () => null,
  (options) => {
    const theme = {
      ...options?.theme,
      extend: { ...config?.theme?.extend, ...options?.theme?.extend },
    };
    const daisyui = {
      ...config?.daisyui,
      ...options?.daisyui,
    };
    const plugins = config?.plugins.concat(options?.plugins ?? []);

    return {
      ...options,
      theme,
      plugins,
      daisyui,
    };
  }
);
