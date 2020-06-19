import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

import { Container, Toast } from "./styles";

function ToastContainer() {
  return (
    <Container>
      <Toast type="error">
        <FiAlertCircle />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Teste erro</p>
        </div>

        <button type="button">
          <FiXCircle />
        </button>
      </Toast>
      <Toast>
        <FiAlertCircle />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Teste erro</p>
        </div>

        <button type="button">
          <FiXCircle />
        </button>
      </Toast>

      <Toast>
        <FiAlertCircle />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Teste erro</p>
        </div>

        <button type="button">
          <FiXCircle />
        </button>
      </Toast>
    </Container>
  );
}

export default ToastContainer;
