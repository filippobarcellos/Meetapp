import styled, { css } from "styled-components";

export const Container = styled.nav`
  ul {
    list-style: none;
    display: flex;

    li {
      & + li {
        margin-left: 10px;
      }
    }

    button {
      padding: 8px;
      color: #fff;
      border: none;
      background: rgba(0, 0, 0, 0.4);
      transition: 0.2s background;
      border-radius: 3px;

      &.active {
        background: #f94d6a;
      }

      &:hover {
        background: #f94d6a;
      }
    }
  }
`;
