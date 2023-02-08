import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { AddTodo } from "./AddTodo";

export default {
  component: AddTodo,
} as Meta<typeof AddTodo>;

export const Default: StoryObj<typeof AddTodo> = {};

export const WithInteraction: StoryObj<typeof AddTodo> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "finish storybook presentation", {
      delay: 100,
    });

    const submitButton = canvas.getByRole("button");

    await userEvent.click(submitButton);
  },
};
