import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import api from "../../services/api";

import MeetupCard from "../../components/MeetupCard";

import { MeetupList, Button } from "./styles";

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const { data } = await api.get("dashboard");
      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <>
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
        {meetups &&
          meetups.map((meetup) => (
            <MeetupCard key={meetup.id} meetup={meetup} />
          ))}
      </MeetupList>
    </>
  );
}
