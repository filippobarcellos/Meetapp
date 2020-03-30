import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;

  header {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: #fff;
      font-size: 28px;
      font-weight: bold;
    }

    button {
      background: #f94d6a;
      padding: 14px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, "#f94d6a")};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const MeetupList = styled.div`
  margin-top: 40px;
`;
