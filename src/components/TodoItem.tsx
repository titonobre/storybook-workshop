import { Button } from "./Button";

import styles from "./TodoItem.module.css";

export type TodoItemProps = {
  text: string;
  onRemove: () => void;
};

export const TodoItem = ({ text, onRemove }: TodoItemProps) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemText}>{text}</div>
      <Button theme="secondary" label="X" onClick={() => onRemove?.()} />
    </div>
  );
};
