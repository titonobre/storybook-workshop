import { Meta, StoryObj } from "@storybook/react";

import { TodoItem } from "./TodoItem";

export default {
  component: TodoItem,
} as Meta<typeof TodoItem>;

export const Default: StoryObj<typeof TodoItem> = {
  args: {
    text: "feed the cat"
  },
};
