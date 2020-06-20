import React from "react";

import { AuthProvider } from "./Auth";
import { ToastProvider } from "./Toast";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
