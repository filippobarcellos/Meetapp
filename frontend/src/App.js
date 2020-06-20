import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";

import AppProvider from "./context";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </AppProvider>
  );
}

export default App;
