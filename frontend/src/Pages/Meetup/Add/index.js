import React from "react";
import api from "../../../services/api";
import history from "../../../services/history";

import MeetupForm from "../../../components/MeetupForm";

function AddMeetup() {
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

  return <MeetupForm onSubmit={onSubmit} />;
}

export default AddMeetup;
