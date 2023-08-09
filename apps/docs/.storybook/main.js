const path = require("path");

const BASE_PATH = 'turborepo-design-system'; // GH_PAGES NAME PROJECT

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.base = BASE_PATH;
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@moiseshp/turborepo-core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/@moiseshp/turborepo-core/"
            ),
          },
        ],
      },
    };
  },
};
