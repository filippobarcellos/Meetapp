import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font: 14px 'Roboto', sans-serif;
  }

  html, body {
    height: 100%;
  }

  body {
    background: linear-gradient(#22202c, #402845);
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100vh;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
