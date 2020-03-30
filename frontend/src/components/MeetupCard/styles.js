import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 4px;

  background: rgba(0, 0, 0, 0.4);

  span {
    color: #fff;
    font-weight: bold;
  }

  time {
    margin-left: auto;
    margin-right: 20px;
    color: #fff;
    opacity: 0.5;
  }
`;
