import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { MdCameraEnhance } from "react-icons/md";

import DefaultLayout from "../_layouts/default";

import { Form, Button, InputWrapper } from "./styles";

import { createMeetup } from "../../store/modules/Meetup/actions";

export default function New() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ file, title, description, date, location }) => {
    const data = new FormData();
    data.append("image", file[0]);
    data.append("title", title);
    data.append("description", description);
    data.append("date", date);
    data.append("location", location);
    dispatch(createMeetup(data));
  };

  return (
    <DefaultLayout>
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
    </DefaultLayout>
  );
}
