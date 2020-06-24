import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt";

import { MdAddCircleOutline } from "react-icons/md";
import api from "../../services/api";

import MeetupCard from "../../components/MeetupCard";
import Pagination from "../../components/Pagination";

import { MeetupList, Button } from "./styles";

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [meetupsPerPage, setMeetupsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadMeetups() {
      const { data } = await api.get("dashboard");

      const newData = data.map((meetup) => {
        return {
          ...meetup,
          date: format(parseISO(meetup.date), "d 'de' MMMM', às ' h'h'", {
            locale: pt,
          }),
        };
      });
      setMeetups(newData);
    }

    loadMeetups();
  }, []);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const indexOfLastMeetup = meetupsPerPage * currentPage;
  const indexOfFirstMeetup = indexOfLastMeetup - meetupsPerPage;

  const meetupsPaginated = meetups.slice(indexOfFirstMeetup, indexOfLastMeetup);

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
        {meetups.length > 0 ? (
          meetupsPaginated.map((meetup) => (
            <Link
              key={meetup._id}
              to={{ pathname: `/meetup/${meetup._id}`, state: { meetup } }}
            >
              <MeetupCard meetup={meetup} />
            </Link>
          ))
        ) : (
          <p>You don't have any meetup created.</p>
        )}
      </MeetupList>

      <Pagination
        meetups={meetups}
        meetupsPerPage={meetupsPerPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}
