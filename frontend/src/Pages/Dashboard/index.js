import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

import DefaultLayout from "../_layouts/default";
import MeetupCard from "../../components/MeetupCard";

import { MeetupList } from "./styles";

export default function Dashboard() {
  return (
    <DefaultLayout>
      <header>
        <strong>My Meetups</strong>
        <button>
          <MdAddCircleOutline size={18} color="#fff" />
          New Meetup
        </button>
      </header>

      <MeetupList>
        <MeetupCard />
      </MeetupList>
    </DefaultLayout>
  );
}
