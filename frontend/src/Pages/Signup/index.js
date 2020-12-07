import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
import history from "../../services/history";

import logo from "../../assets/logo.svg";

import { ToastContext } from "../../context/Toast";

const RegisterSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Signup() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema,
  });

  const { addToast } = useContext(ToastContext);

  const onSubmit = async ({ name, email, password }) => {
    try {
      await api.post("/users", {
        name,
        email,
        password,
      });

      addToast({
        type: "success",
        title: "User has been created",
        description: "Please login",
      });

      history.push("/");
    } catch (err) {
      addToast({
        type: "error",
        title: "Something is not right",
        description: "Please try again",
      });
    }
  };

  return (
    <>
      <img src={logo} alt="Meetapp" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="What's your name?"
          ref={register}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          type="text"
          name="email"
          placeholder="What's your email?"
          ref={register}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          name="password"
          placeholder="Choose a password"
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Create new user</button>

        <Link to="/">Sign in</Link>
      </form>
    </>
  );
}
