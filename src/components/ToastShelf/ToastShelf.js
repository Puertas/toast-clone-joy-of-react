import React, { useContext, useEffect } from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
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
