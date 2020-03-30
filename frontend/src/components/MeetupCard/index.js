import React from "react";
import { MdChevronRight } from "react-icons/md";

import { Item } from "./styles";

export default function MeetupCard() {
  return (
    <Item>
      <span>React Native Meetup</span>
      <time>July 24, 20h</time>
      <MdChevronRight size={20} color="#fff" />
    </Item>
  );
}
