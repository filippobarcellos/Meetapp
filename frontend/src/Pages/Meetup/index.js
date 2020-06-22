import React from "react";
import { useLocation } from "react-router-dom";
import {
  MdDelete,
  MdEdit,
  MdPinDrop,
  MdPermContactCalendar,
} from "react-icons/md";

import banner from "../../assets/banner.jpeg";

import { BtnContainer, Button, Content } from "./styles";

export default function Meetup() {
  const {
    state: { meetup },
  } = useLocation();
  return (
    <>
      <header>
        <strong>{meetup.title}</strong>
        <BtnContainer>
          <Button className="primary">
            <MdEdit size={18} color="#fff" />
            Edit
          </Button>
          <Button className="danger">
            <MdDelete size={18} color="#fff" />
            Delete
          </Button>
        </BtnContainer>
      </header>

      <Content>
        <img src={meetup.image} alt={meetup.title} />
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
