import React from "react";
import { Switch, Route } from "react-router-dom";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Meetup from "./Pages/Meetup";
import Profile from "./Pages/Profile";
import New from "./Pages/New";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/meetup" component={Meetup} />
      <Route path="/profile" component={Profile} />
      <Route path="/new" component={New} />
    </Switch>
  );
}
