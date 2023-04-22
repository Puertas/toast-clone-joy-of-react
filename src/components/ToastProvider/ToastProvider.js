import React, { useState, createContext, useCallback } from 'react';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

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

  const clearAllToasts = useCallback(() => setToasts([]), []);

  const value = {
    toasts,
    addToast,
    deleteToast,
    clearAllToasts,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
