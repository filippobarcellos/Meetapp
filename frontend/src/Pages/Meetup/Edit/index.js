import React from "react";
import { useLocation } from "react-router-dom";

import api from "../../../services/api";
import history from "../../../services/history";

function EditMeetup() {
  const {
    state: { meetup },
  } = useLocation();

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

  return <h1>TEste</h1>;
}

export default EditMeetup;
