import React from "react";
import { useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { MdCameraEnhance } from "react-icons/md";
import api from "../../services/api";
import history from "../../services/history";

import { Form, Button, InputWrapper } from "./styles";

export default function New() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("image", data.image[0]);
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("location", data.location);

    try {
      await api.post("meetups", formData);
      history.push("dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <input type="file" name="image" ref={register} />
          <div>
            <MdCameraEnhance size={80} />
            <span>Select Image</span>
          </div>
        </InputWrapper>
        <input
          type="text"
          placeholder="Meetup Title"
          name="title"
          ref={register}
        />
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          ref={register}
        />
        <input type="date" placeholder="Date" name="date" ref={register} />
        <input type="text" placeholder="Local" name="location" ref={register} />
        <Button type="submit" className="danger">
          <MdAdd size={16} /> Add Meetup
        </Button>
      </Form>
    </>
  );
}
