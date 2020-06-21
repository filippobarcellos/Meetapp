import styled, { keyframes } from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;

  animation: ${appear} 2s;

  a {
    color: #fff;
    margin-top: 14px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 12px;
      margin-bottom: 10px;
      color: #fff;
    }

    p {
      color: #f94d6a;
      margin-bottom: 10px;
    }

    button {
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#f94d6a")};
      }
    }
  }
`;
