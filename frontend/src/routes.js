import React from "react";
import { Switch, Route } from "react-router-dom";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}
