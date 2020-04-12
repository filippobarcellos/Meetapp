import styled from "styled-components";
import { darken } from "polished";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

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

export const Button = styled.button`
  align-items: center;
  color: #fff;
  border: 0;
  border-radius: 4px;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 44px;
  justify-content: space-between;
  margin: 5px 10px;
  padding: 0 20px;
  transition: background 0.2s;

  svg {
    margin-right: 10px;
  }

  &.danger {
    background: #f94d6a;

    &:hover {
      background: ${darken(0.09, "#f94d6a")};
    }
  }
`;
