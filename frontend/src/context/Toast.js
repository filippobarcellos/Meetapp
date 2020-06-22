import React, { createContext, useState } from "react";
import { uuid } from "uuidv4";

import ToastContainer from "../components/ToastContainer";

export const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  function addToast({ type, title, description }) {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages((state) => [...state, toast]);
  }

  function removeToast(id) {
    setMessages((state) => state.filter((message) => message.id !== id));
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};
