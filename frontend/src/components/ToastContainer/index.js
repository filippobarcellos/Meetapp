import React from "react";

import Toast from "./Toast";

import { Container } from "./styles";

function ToastContainer({ messages, onDelete }) {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
}

export default ToastContainer;
