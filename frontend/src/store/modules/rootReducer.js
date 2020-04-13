import { combineReducers } from "redux";

import auth from "./Auth/reducer";
import user from "./User/reducer";
import meetup from "./Meetup/reducer";

export default combineReducers({
  auth,
  user,
  meetup,
});
