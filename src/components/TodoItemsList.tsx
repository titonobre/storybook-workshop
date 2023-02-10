import { TodoItem } from "./TodoItem";

import styles from "./TodoItemsList.module.css";

export type TodoItemsListProps = {
  items: string[];
  onRemove?: (text: string) => void;
};

export const TodoItemsList = ({ items, onRemove }: TodoItemsListProps) => {
  return (
    <div className={styles.todoItemsList} data-testid="todos-list">
      {items.map((item) => (
        <TodoItem key={item} text={item} onRemove={() => onRemove?.(item)} />
      ))}
    </div>
  );
};
