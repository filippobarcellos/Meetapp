import styled from "styled-components";
import { darken } from "polished";

export const BtnContainer = styled.div`
  display: flex;
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
  &.primary {
    background: #4dbaf9;
    &:hover {
      background: ${darken(0.09, "#4DBAF9")};
    }
  }
  &.danger {
    background: #f94d6a;
    &:hover {
      background: ${darken(0.09, "#f94d6a")};
    }
  }
`;

export const Content = styled.div`
  img {
    max-width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  p {
    color: #fff;
    line-height: 20px;
    margin-bottom: 20px;
  }

  div {
    color: #fff;
    opacity: 0.5;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;

    svg {
      margin-right: 5px;
    }

    span {
      display: flex;
      margin-right: 20px;
    }
  }
`;
