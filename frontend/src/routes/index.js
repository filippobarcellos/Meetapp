import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import MeetupDetails from "../Pages/Meetup/Details";
import Profile from "../Pages/Profile";
import AddMeetup from "../Pages/Meetup/Add";
import EditMeetup from "../Pages/Meetup/Edit";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" component={Signup} />

      <Route path="/meetup/:id" component={MeetupDetails} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/create-meetup" component={AddMeetup} isPrivate />
      <Route path="/edit-meetup/:id" component={EditMeetup} isPrivate />
    </Switch>
  );
}
