import React, { useState, useContext } from "react";
import { MdAdd } from "react-icons/md";
import api from "../../services/api";

import { AuthContext } from "../../context/Auth";

import { Form, Button } from "./styles";

export default function Profile() {
  const [data, setData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    password: "",
  });

  const { user } = useContext(AuthContext);

  // const formData = Object.assign({
  //   name: data.name,
  //   email: data.email
  // }, { data.oldPassword ? {
  //   oldPassword: data.oldPassword,
  //   password: data.password,
  // });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={(e) => handleChange(e)} />

        <input type="text" name="email" onChange={(e) => handleChange(e)} />

        <hr />
        <input
          type="password"
          name="oldPassword"
          placeholder="Old password"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="password"
          name="password"
          placeholder="New password"
          onChange={(e) => handleChange(e)}
        />

        <Button type="submit" className="danger">
          <MdAdd size={16} /> Save Profile
        </Button>
      </Form>
    </>
  );
}
