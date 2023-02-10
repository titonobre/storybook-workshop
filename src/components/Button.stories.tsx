import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

export default {
  component: Button,
  argTypes: {
    label: {
      options: ["+", "-"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    label: "Button",
  },
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    theme: "primary",
    label: "Button",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    theme: "secondary",
    label: "Button",
  },
};
