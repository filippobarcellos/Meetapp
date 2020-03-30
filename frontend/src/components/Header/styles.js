import styled from "styled-components";
import { darken } from "polished";

export const StyledHeader = styled.header`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 900px;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 32px;
  }

  div {
    margin-left: auto;
    margin-right: 20px;
    text-align: right;

    span {
      display: block;
      color: #fff;
      font-weight: bold;
      margin-bottom: 3px;
    }

    a {
      color: #fff;
      opacity: 0.5;
    }
  }

  button {
    background: #f94d6a;
    padding: 12px;
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
`;
