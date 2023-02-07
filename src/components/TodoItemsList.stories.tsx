import { Meta, StoryObj } from "@storybook/react";

import { TodoItemsList } from "./TodoItemsList";

export default {
  component: TodoItemsList,
} as Meta<typeof TodoItemsList>;

export const Default: StoryObj<typeof TodoItemsList> = {
  args: {
    items: ["foo", "bar"],
  },
};
