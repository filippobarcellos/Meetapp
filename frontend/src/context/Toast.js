import React, { createContext, useCallback, useContext } from "react";

const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const addToast = useCallback(() => {}, []);

  const removeToast = useCallback(() => {}, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
}

export { ToastProvider, useToast };
