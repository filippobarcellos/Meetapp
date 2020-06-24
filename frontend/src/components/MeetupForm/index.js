import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { MdCameraEnhance } from "react-icons/md";

import { Form, Button, InputWrapper } from "./styles";

function MeetupForm({ onSubmit }) {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <input
          type="file"
          name="image"
          ref={register}
          onChange={(e) => handleImageChange(e)}
        />
        <img src={preview} />
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
  );
}

export default MeetupForm;
