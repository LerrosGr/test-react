import { useState } from 'react';
import css from './Counter.module.css';
import { clsx } from 'clsx';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClickMinus = () => {
    setCount(count - 1);
  };
  const handleClickPlus = () => {
    setCount(count + 1);
  };
  return (
    <div className={css.container}>
      <h2>Лічильник</h2>
      <h1>{count}</h1>
      <button
        className={clsx(css.button, css.buttonMinus)}
        onClick={handleClickMinus}
      >
        Мінус
      </button>
      <button
        className={clsx(css.button, css.buttonPlus)}
        onClick={handleClickPlus}
      >
        Плюс
      </button>
    </div>
  );
}
