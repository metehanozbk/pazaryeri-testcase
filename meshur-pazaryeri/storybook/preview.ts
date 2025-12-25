import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Tailwind CSS dosyanın yolu (Yolu kontrol et!)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Storybook içinde dark mode testi yapabilmek için
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;