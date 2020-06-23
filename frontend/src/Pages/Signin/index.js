import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import history from "../../services/history";
import * as yup from "yup";

import { AuthContext } from "../../context/Auth";
import { ToastContext } from "../../context/Toast";

import logo from "../../assets/logo.svg";

import Spinner from "../../components/Spinner";

import AuthLayout from "../_layouts/auth";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Signin() {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    validationSchema: LoginSchema,
  });

  const { signIn } = useContext(AuthContext);
  const { addToast } = useContext(ToastContext);

  const onSubmit = async ({ email, password }) => {
    try {
      await signIn({ email, password });

      history.push("/dashboard");
    } catch (err) {
      addToast({
        type: "error",
        title: "Algo deu errado",
        description: "Cheque suas credenciais",
      });
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

        <button type="submit">
          {isSubmitting ? <Spinner size={20} color={"#fff"} /> : "Sign in"}
        </button>
        <Link to="signup">Create you account</Link>
      </form>
    </AuthLayout>
  );
}
