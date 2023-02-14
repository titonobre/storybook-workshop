import { useState } from "react";

import styles from "./App.module.css";

// import { AddTodo } from "./components/AddTodo";
// import { TodoItemsList } from "./components/TodoItemsList";

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
      <ul>
        {items.map((item) => {
          return (
            <li key={item}>
              {item} <button onClick={() => onRemove(item)}>X</button>
            </li>
          );
        })}
      </ul>
      {/* <TodoItemsList items={items} onRemove={onRemove} /> */}

      <button onClick={() => onAdd(`todo ${items.length}`)}>+</button>
      {/* <AddTodo onAddTodo={onAdd} /> */}
    </div>
  );
}
