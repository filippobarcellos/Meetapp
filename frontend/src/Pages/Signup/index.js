import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import logo from "../../assets/logo.svg";

import AuthLayout from "../_layouts/auth";

const RegisterSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Signup() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema,
  });

  const onSubmit = ({ name, email, password }) => {
    console.log({ email, password });
  };

  return (
    <AuthLayout>
      <img src={logo} alt="Meetapp" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Type your name"
          ref={register}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          type="text"
          name="email"
          placeholder="Type your email"
          ref={register}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          name="password"
          placeholder="Type your password"
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Create new user</button>

        <Link to="/">Sign in</Link>
      </form>
    </AuthLayout>
  );
}
