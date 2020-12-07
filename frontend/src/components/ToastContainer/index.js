import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Toast from "./Toast";

import { Container } from "./styles";

function ToastContainer({ messages, onDelete }) {
  return (
    <AnimatePresence>
      <Container>
        {messages.map((message) => (
          <Toast key={message.id} message={message} />
        ))}
      </Container>
    </AnimatePresence>
  );
}

export default ToastContainer;
