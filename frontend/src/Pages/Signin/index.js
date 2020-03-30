import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import AuthLayout from "../_layouts/auth";

export default function Signin() {
  return (
    <AuthLayout>
      <img src={logo} alt="Meetapp" />
      <form>
        <input type="text" placeholder="Type your email" />
        <input type="password" placeholder="Type your password" />

        <button>Sign in</button>
        <Link to="signup">Sign up</Link>
      </form>
    </AuthLayout>
  );
}
