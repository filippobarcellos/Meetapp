import React, { useEffect, useContext } from "react";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

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
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
    >
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
    </motion.div>
  );
}

export default Toast;
