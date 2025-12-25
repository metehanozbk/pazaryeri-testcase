import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  // Stories dosyalarının nerede olduğunu söyler
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"], // Resimlerin görünmesi için public klasörünü bağladık
};
export default config;