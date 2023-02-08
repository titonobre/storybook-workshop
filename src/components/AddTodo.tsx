import { useRef } from "react";

import { Button } from "./Button";

import styles from "./AddTodo.module.css";

export type AddTodoProps = {
  onAddTodo: (text: string) => void;
};

export const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickAddButton = () => {
    const value = inputRef.current?.value;
    value && onAddTodo?.(value);
  };

  return (
    <div className={styles.addTodo}>
      <input ref={inputRef}  className={styles.addTodoInput} type={"text"} role={"textbox"} />
      <Button theme="primary" label="+" onClick={onClickAddButton} />
    </div>
  );
};
