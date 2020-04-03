import produce from "immer";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "./actions";

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });
    case LOGIN_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.token = payload.token;
        draft.signed = true;
      });
    case LOGIN_FAILED:
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
