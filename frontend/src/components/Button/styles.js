import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #f94d6a;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 20px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.09, "#f94d6a")};
  }
`;
