import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ list, handleCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {list?.map(({ id, type, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast type={type} handleClose={() => handleCloseToast(id)}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
