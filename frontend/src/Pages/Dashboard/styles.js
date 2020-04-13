import styled from "styled-components";
import { darken } from "polished";

export const MeetupList = styled.div`
  margin-top: 40px;
`;

export const Button = styled.button`
  padding: 12px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;

  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.03, "#f94d6a")};
  }
`;
