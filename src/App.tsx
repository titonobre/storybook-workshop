import { useState } from "react";

import styles from "./App.module.css";
import { TodoItemsList } from "./components/TodoItemsList";
import { AddTodo } from "./components/AddTodo";

export default function App() {
  const [items, setItems] = useState<string[]>([]);

  const onRemove = (itemToRemove: string) => {
    setItems(items.filter((item) => item != itemToRemove));
  };

  const onAdd = (itemToAdd: string) => {
    setItems([...items, itemToAdd]);
  };

  return (
    <div className={styles.app}>
      <TodoItemsList items={items} onRemove={onRemove} />

      <AddTodo onAddTodo={onAdd} />
    </div>
  );
}
