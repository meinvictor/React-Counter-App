import React, { useState } from "react";
import styles from "./styles/app.module.css";

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.app}>
      <div className={styles.counter}>
        <h1 className={styles.countText}>Your count: </h1>
        <h1 className={styles.countText}>{count}</h1>
        <button onClick={onClickMinus} className={styles.btnMinus}>
          Minus
        </button>
        <button onClick={onClickPlus} className={styles.btnPlus}>
          Plus
        </button>
      </div>
    </div>
  );
}

export default App;
