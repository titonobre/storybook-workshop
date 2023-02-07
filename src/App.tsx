import { useCallback, useState } from "react";

import styles from "./App.module.css";
import { TodoItemsList } from "./components/TodoItemsList";
import { AddTodo } from "./components/AddTodo";

function App() {
  const [items, setItems] = useState<string[]>([]);

  const onRemove = useCallback(
    (itemToRemove: string) => {
      setItems(items.filter((item) => item != itemToRemove));
    },
    [items]
  );

  const onAdd = useCallback(
    (itemToAdd: string) => {
      setItems([...items, itemToAdd]);
    },
    [items]
  );

  return (
    <div className={styles.app}>
      <TodoItemsList items={items} onRemove={onRemove} />

      <AddTodo onAddTodo={onAdd} />
    </div>
  );
}

export default App;
