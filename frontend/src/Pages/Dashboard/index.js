import React from "react";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";

import DefaultLayout from "../_layouts/default";
import MeetupCard from "../../components/MeetupCard";

import { MeetupList, Button } from "./styles";

export default function Dashboard() {
  return (
    <DefaultLayout>
      <header>
        <strong>My Meetups</strong>
        <Link to="/new">
          <Button>
            <MdAddCircleOutline size={18} color="#fff" />
            New Meetup
          </Button>
        </Link>
      </header>

      <MeetupList>
        <MeetupCard />
      </MeetupList>
    </DefaultLayout>
  );
}
