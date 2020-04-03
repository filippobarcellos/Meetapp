import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import Meetup from "../Pages/Meetup";
import Profile from "../Pages/Profile";
import New from "../Pages/New";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" component={Signup} />

      <Route path="/meetup" component={Meetup} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/new" component={New} isPrivate />
    </Switch>
  );
}
