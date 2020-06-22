import React from "react";
import { useLocation } from "react-router-dom";
import {
  MdDelete,
  MdEdit,
  MdPinDrop,
  MdPermContactCalendar,
} from "react-icons/md";
import api from "../../services/api";
import history from "../../services/history";

import { BtnContainer, Button, Content } from "./styles";

export default function Meetup() {
  const {
    state: { meetup },
  } = useLocation();

  async function handleDelete(id) {
    try {
      await api.delete(`meetups/${id}`);

      history.push("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <header>
        <strong>{meetup.title}</strong>
        <BtnContainer>
          <Button className="primary">
            <MdEdit size={18} color="#fff" />
            Edit
          </Button>
          <Button className="danger" onClick={() => handleDelete(meetup._id)}>
            <MdDelete size={18} color="#fff" />
            Delete
          </Button>
        </BtnContainer>
      </header>

      <Content>
        <img
          src={`http://localhost:5000/images/${meetup.banner}`}
          alt={meetup.title}
        />
        <p>{meetup.description}</p>
        <div>
          <span>
            <MdPermContactCalendar size={16} /> {meetup.date}
          </span>
          <span>
            <MdPinDrop size={16} /> {meetup.location}
          </span>
        </div>
      </Content>
    </>
  );
}
