import produce from "immer";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILED,
  USER_SIGN_OUT,
} from "./actions";

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

const auth = produce((draft = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      draft.loading = true;
      return draft;
    case LOGIN_SUCCESS:
      draft.loading = false;
      draft.token = payload.token;
      draft.signed = true;
      return draft;
    case REGISTER_SUCCESS:
      draft.loading = false;
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      draft.loading = false;
      return draft;
    case USER_SIGN_OUT:
      draft.token = null;
      draft.signed = false;
      return draft;
    default:
      return draft;
  }
});

export default auth;
