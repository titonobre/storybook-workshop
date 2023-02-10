import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { AddTodo } from "./AddTodo";

export default {
  component: AddTodo,
  parameters: {
    a11y: {
      disable: true,
    },
  },
} as Meta<typeof AddTodo>;

export const Default: StoryObj<typeof AddTodo> = {};

export const WithInteraction: StoryObj<typeof AddTodo> = {
  play: async ({ canvasElement, step, args }) => {
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

    await step("Check text field becomes empty", async () => {
      await expect(input.value).toBe("");
    });

    await step("Check callback called with correct value", async () => {
      await expect(args.onAddTodo).toHaveBeenCalledTimes(1);
      await expect(args.onAddTodo).toHaveBeenCalledWith(
        "finish storybook presentation"
      );
    });
  },
};
