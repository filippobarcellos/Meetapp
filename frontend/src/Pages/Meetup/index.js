import React from "react";
import {
  MdDelete,
  MdEdit,
  MdPinDrop,
  MdPermContactCalendar
} from "react-icons/md";

import banner from "../../assets/banner.jpeg";

import DashBoardLayout from "../_layouts/dashboard";

import { BtnContainer, Button, Content } from "./styles";

export default function Meetup() {
  return (
    <DashBoardLayout>
      <header>
        <strong>React Native's Meetup </strong>
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
        <img src={banner} alt="React native meetup" />
        <p>
          Sed et enim in lectus egestas posuere blandit id mauris. Curabitur in
          purus turpis. Vivamus nec interdum sem. Quisque consectetur metus
          vitae urna tincidunt euismod. Praesent nec varius velit. Praesent
          fermentum condimentum aliquet. Aliquam erat urna, placerat vel lectus
          in, pulvinar maximus diam. Integer non interdum sem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          hendrerit mattis tempor. Vivamus condimentum quam metus.
        </p>
        <div>
          <span>
            <MdPermContactCalendar size={16} /> July 24, 20h
          </span>
          <span>
            <MdPinDrop size={16} /> Queen Elizabeth Street, 234
          </span>
        </div>
      </Content>
    </DashBoardLayout>
  );
}
