import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { Button } from "./Button";

export default {
  component: Button,
  tags: ["autodocs"],
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole("button");

    await userEvent.click(submitButton);
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
