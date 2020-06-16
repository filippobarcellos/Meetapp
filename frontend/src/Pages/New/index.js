import React from "react";
import { useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { MdCameraEnhance } from "react-icons/md";

import { Form, Button, InputWrapper } from "./styles";

export default function New() {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ file, title, description, date, location }) => {
    const data = new FormData();
    data.append("image", file[0]);
    data.append("title", title);
    data.append("description", description);
    data.append("date", date);
    data.append("location", location);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <input type="file" name="file" ref={register} />
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
