import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

import DashBoardLayout from "../_layouts/dashboard";
import MeetupCard from "../../components/MeetupCard";

import { MeetupList } from "./styles";

export default function Dashboard() {
  return (
    <DashBoardLayout>
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
    </DashBoardLayout>
  );
}
