import React, { useContext, useEffect } from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, clearAllToasts } = useContext(ToastContext);

  useEffect(() => {
    function handleKeypress(event) {
      if (event.code === 'Escape') {
        clearAllToasts();
      }
    }
    window.addEventListener('keydown', handleKeypress);

    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
  }, [clearAllToasts]);

  return (
    <ol className={styles.wrapper}>
      {toasts?.map(({ id, type, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} type={type}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
