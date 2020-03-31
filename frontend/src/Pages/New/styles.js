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

  textarea {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    padding: 12px;
    height: 200px;
    color: #fff;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
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

export const InputWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  height: 300px;
  display: flex;
  justify-content: center;

  button {
    font-size: 30px;
    border: none;
    background: none;
    color: #fff;
    opacity: 0.2;
    font-weight: bold;
  }

  input[type="file"] {
    position: absolute;
    font-size: 60px;
    cursor: pointer;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;
