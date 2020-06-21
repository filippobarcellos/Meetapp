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
  align-self: flex-end;
  width: 17%;
  margin-right: auto;
  align-items: center;
  color: #fff;
  border: 0;
  border-radius: 4px;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 44px;
  justify-content: space-between;
  margin: 5px;
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
  overflow: hidden;
  margin-bottom: 10px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    color: #fff;
    opacity: 0.3;
    z-index: -1;
  }

  input[type="file"] {
    height: 100%;
    font-size: 100px;
    cursor: pointer;
    background: red;
    opacity: 0;
    z-index: 999;
    position: absolute;
  }
`;
