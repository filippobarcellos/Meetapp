import produce from "immer";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_REQUEST,
  REGISTER_FAILED,
  USER_SIGN_OUT,
} from "./actions";

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.token = payload.token;
        draft.signed = true;
      });
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case REGISTER_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case USER_SIGN_OUT:
      return produce(state, (draft) => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}
