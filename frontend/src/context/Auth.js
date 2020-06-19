import React, { useState, createContext, useCallback } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@meetapp:token");
    const user = localStorage.getItem("@meetapp:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@meetapp:token", token);
    localStorage.setItem("@meetapp:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@meetapp:token");
    localStorage.removeItem("@meetapp:user");

    setData({});
  }, []);

  const updateUser = useCallback(
    (user) => {
      setData({
        token: data.token,
        user,
      });

      localStorage.setItem("@meetapp:user", JSON.stringify(user));
    },
    [data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
