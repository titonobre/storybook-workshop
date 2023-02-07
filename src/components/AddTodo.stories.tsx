import { Meta, StoryObj } from "@storybook/react";

import { AddTodo } from "./AddTodo";

export default {
  component: AddTodo,
} as Meta<typeof AddTodo>;

export const Default: StoryObj<typeof AddTodo> = {};
