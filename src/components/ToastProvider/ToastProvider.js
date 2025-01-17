import React, { useState, createContext, useCallback } from 'react';

import useKeydown from '../../hooks/useKeydown';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const clearAllToast = useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', clearAllToast);

  function deleteToast(id) {
    const newList = toasts.filter((toast) => toast.id !== id);
    setToasts(newList);
  }

  function addToast(variant, message) {
    const newToast = {
      id: crypto.randomUUID(),
      type: variant,
      message: message,
    };
    setToasts([...toasts, newToast]);
  }

  const value = {
    toasts,
    addToast,
    deleteToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
