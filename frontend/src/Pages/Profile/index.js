import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import DefaultLayout from "../_layouts/default";

import { Form, Button } from "./styles";

import { updateProfile } from "../../store/modules/User/actions";

const ProfileSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: ProfileSchema,
    defaultValues: {
      name: profile.name,
      email: profile.email,
    },
  });

  const onSubmit = (data) => {
    dispatch(updateProfile(data));
  };

  return (
    <DefaultLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" ref={register} />
        {errors.name && <p>{errors.name.message}</p>}
        <input type="text" name="email" ref={register} />
        {errors.email && <p>{errors.email.message}</p>}
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
        <input type="password" placeholder="Confirm new password" />

        <Button type="submit" className="danger">
          <MdAdd size={16} /> Save Profile
        </Button>
      </Form>
    </DefaultLayout>
  );
}
