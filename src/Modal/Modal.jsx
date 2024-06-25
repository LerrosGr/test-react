import { useState } from 'react';
import css from './Modal.module.css';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.container}>
      {!isOpen && <button onClick={handleClickOpen}>Open gif</button>}
      {isOpen && (
        <>
          <button onClick={handleClickClose}>Close gif</button>

          <img
            src="https://i.pinimg.com/originals/57/61/5b/57615b8c0092a66c1d4058b1692955cc.gif"
            alt="gif"
            height={200}
            width={180}
          />
        </>
      )}
    </div>
  );
}
