import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import history from "../../services/history";

import { AuthContext } from "../../context/Auth";

import logo from "../../assets/logo.svg";

import AuthLayout from "../_layouts/auth";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Signin() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: LoginSchema,
  });

  const { signIn } = useContext(AuthContext);

  const onSubmit = ({ email, password }) => {
    try {
      signIn({ email, password });
      history.push("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <AuthLayout>
      <img src={logo} alt="Meetapp" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Type your email"
          name="email"
          ref={register}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Type your password"
          name="password"
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign in</button>
        <Link to="signup">Sign up</Link>
      </form>
    </AuthLayout>
  );
}
