import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import api from "../../services/api";

import { AuthContext } from "../../context/Auth";

import Button from "../../components/Button";

import { Form } from "./styles";

export default function Profile() {
  const { user, updateUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const onSubmit = async (data) => {
    let formData;

    data.oldPassword
      ? (formData = {
          name: data.name,
          email: data.email,
          oldPassword: data.oldPassword,
          password: data.password,
        })
      : (formData = {
          name: data.name,
          email: data.email,
        });

    try {
      const response = await api.put("/users", formData);

      updateUser(response.data.user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" ref={register} />

        <input type="text" name="email" ref={register} />

        <hr />
        <input
          type="password"
          name="oldPassword"
          placeholder="Old password"
          ref={register}
        />

        <input
          type="password"
          name="password"
          placeholder="New password"
          ref={register}
        />

        <Button type="submit" style={{ alignSelf: "flex-end" }}>
          Save Profile
        </Button>
      </Form>
    </>
  );
}
