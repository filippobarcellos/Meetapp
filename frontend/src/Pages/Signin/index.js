import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import AuthLayout from "../_layouts/auth";

import { signIn } from "../../store/modules/Auth/actions";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(e) {
    e.preventDefault();
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

        <button type="submit">{loading ? "Loading ..." : "Sign in"}</button>
        <Link to="signup">Sign up</Link>
      </form>
    </AuthLayout>
  );
}
