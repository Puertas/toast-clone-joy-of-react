import React, { useState } from 'react';

import Button from '../Button';
import Radio from '../Radio';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = useState('');
  const [toastList, setToastList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    handleAddToast();
    setVariant(VARIANT_OPTIONS[0]);
    setMessage('');
  }

  function handleCloseToast(id) {
    const newList = toastList.filter((toast) => toast.id !== id);
    setToastList(newList);
  }

  function handleAddToast() {
    const newToast = {
      id: crypto.randomUUID(),
      type: variant,
      message: message,
    };
    setToastList([...toastList, newToast]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf list={toastList} handleCloseToast={handleCloseToast} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor='message'
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id='message'
                className={styles.messageInput}
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;

                return (
                  <Radio
                    key={id}
                    id={id}
                    option={option}
                    name='variant'
                    isChecked={option === variant}
                    setChecked={setVariant}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button disabled={!message}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
