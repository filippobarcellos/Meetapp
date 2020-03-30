import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

import Header from "../../components/Header";
import MeetupCard from "../../components/MeetupCard";

import { Container, MeetupList } from "./styles";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <header>
          <strong>My Meetups</strong>
          <button>
            <MdAddCircleOutline size={18} color="#fff" />
            New Meetup
          </button>
        </header>

        <MeetupList>
          <MeetupCard />
          <MeetupCard />
          <MeetupCard />
          <MeetupCard />
        </MeetupList>
      </Container>
    </>
  );
}
