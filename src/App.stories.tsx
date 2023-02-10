import { Meta, StoryObj } from "@storybook/react";

import App from "./App";

export default {
  component: App,
  parameters: {
    a11y: {
      disable: true,
    },
  },
} as Meta<typeof App>;

export const Default: StoryObj<typeof App> = {};
