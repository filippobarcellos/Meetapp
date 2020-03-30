import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import AuthLayout from "../_layouts/auth";

export default function Signup() {
  return (
    <AuthLayout>
      <img src={logo} alt="Meetapp" />
      <form>
        <input type="text" placeholder="Type your name" />
        <input type="text" placeholder="Type your email" />
        <input type="password" placeholder="Type your password" />

        <button>Create new user</button>

        <Link to="/signin">Sign in</Link>
      </form>
    </AuthLayout>
  );
}
