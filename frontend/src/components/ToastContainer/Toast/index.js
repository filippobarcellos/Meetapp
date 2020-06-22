import React, { useEffect, useContext } from "react";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

import { ToastContext } from "../../../context/Toast";

import { Container } from "./styles";

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
};

function Toast({ message }) {
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container type={message.type}>
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle />
      </button>
    </Container>
  );
}

export default Toast;
