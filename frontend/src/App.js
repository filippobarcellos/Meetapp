import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";

import { AppProvider } from "./context";

import GlobalStyle from "./styles/global";

import ToastContainer from "./components/ToastContainer";

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </AppProvider>
  );
}

export default App;
