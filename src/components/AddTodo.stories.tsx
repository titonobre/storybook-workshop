import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { AddTodo } from "./AddTodo";

export default {
  component: AddTodo,
} as Meta<typeof AddTodo>;

export const Default: StoryObj<typeof AddTodo> = {};

export const WithInteraction: StoryObj<typeof AddTodo> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>("textbox");
    const submitButton = canvas.getByRole("button");

    await step("Write TODO text", async () => {
      await userEvent.type(input, "finish storybook presentation", {
        delay: 100,
      });
    });

    await step("Click Add Button", async () => {
      await userEvent.click(submitButton);
    });

  },
};
