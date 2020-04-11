import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import logo from "../../assets/logo.svg";

import AuthLayout from "../_layouts/auth";

import { signIn } from "../../store/modules/Auth/actions";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Signin() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: LoginSchema,
  });

  const onSubmit = ({ email, password }) => {
    dispatch(signIn(email, password));
  };

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

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

        <button type="submit">{loading ? "Loading ..." : "Sign in"}</button>
        <Link to="signup">Sign up</Link>
      </form>
    </AuthLayout>
  );
}
