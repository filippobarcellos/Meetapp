import produce from "immer";

import { LOGIN_SUCCESS, USER_SIGN_OUT } from "../Auth/actions";
import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
} from "./actions";

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

const user = produce((draft = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      draft.profile = payload.user;
      return draft;
    case USER_SIGN_OUT:
      draft.profile = null;
      return draft;
    // case UPDATE_PROFILE_REQUEST:
    //   return (draft.loading = true);
    case UPDATE_PROFILE_FAILED:
    default:
      return draft;
  }
});

export default user;
