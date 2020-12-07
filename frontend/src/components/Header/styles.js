import styled from "styled-components";

export const Header = styled.header`
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
`;
