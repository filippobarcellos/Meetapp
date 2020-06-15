import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import history from "./services/history";

import { AuthProvider } from "./context/Auth";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </AuthProvider>
  );
}

export default App;
