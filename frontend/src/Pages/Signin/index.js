import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import AuthLayout from "../_layouts/auth";

import { signIn } from "../../store/modules/Auth/actions";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    dispatch(signIn(email, password));
  }

  return (
    <AuthLayout>
      <img src={logo} alt="Meetapp" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Type your password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Sign in</button>
        <Link to="signup">Sign up</Link>
      </form>
    </AuthLayout>
  );
}
