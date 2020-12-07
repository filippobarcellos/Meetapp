import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Form = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 60px auto;

  animation: ${appear} 2s;

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 12px;
    margin-bottom: 10px;
    color: #fff;
  }

  hr {
    background: rgba(255, 255, 255, 0.2);
    border: 0;
    height: 1px;
    margin: 20px 0 20px 0;
  }
`;
