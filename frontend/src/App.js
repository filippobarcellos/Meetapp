import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";

import { AuthProvider } from "./context/Auth";

import GlobalStyle from "./styles/global";

import ToastContainer from "./components/ToastContainer";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;
