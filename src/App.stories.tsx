import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

export const WithInteraction: StoryObj<typeof App> = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>("textbox");
    
    await step("Write TODO text", async () => {
      await userEvent.type(input, "finish storybook presentation", {
        delay: 100,
      });
    });
    
    await step("Click Add Button", async () => {
      const submitButton = canvas.getByRole("button", { name: "+" });
      await userEvent.click(submitButton);
    });
    
    await step("Check text field becomes empty", async () => {
      await expect(input.value).toBe("");
    });
    
    await step("Check TODO was added", async () => {
      const todoItem = canvas.getByText("finish storybook presentation");
      
      await expect(todoItem).toBeInTheDocument();
    });
  },
};
