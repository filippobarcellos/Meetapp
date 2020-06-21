import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 900px;
  position: relative;

  animation: ${appear} 2s;

  header {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 28px;
      font-weight: bold;
    }
  }
`;
