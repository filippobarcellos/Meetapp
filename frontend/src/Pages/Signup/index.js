import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/logo.svg";

import AuthLayout from "../_layouts/auth";

import { signUp } from "../../store/modules/Auth/actions";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(name, email, password));
  };

  return (
    <AuthLayout>
      <img src={logo} alt="Meetapp" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Create new user</button>

        <Link to="/">Sign in</Link>
      </form>
    </AuthLayout>
  );
}
