import { useCallback, useState } from "react";

import styles from "./App.module.css";

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
      <ul>
        {items.map((item) => {
          return (
            <li key={item}>
              {item} <button onClick={() => onRemove(item)}>X</button>
            </li>
          );
        })}
      </ul>

      <button onClick={() => onAdd(`todo ${items.length}`)}>+</button>
    </div>
  );
}

export default App;
