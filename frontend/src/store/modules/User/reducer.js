import produce from "immer";

import { LOGIN_SUCCESS } from "../Auth/actions";
import { USER_SIGN_OUT } from "../User/actions";

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.profile = payload.user;
      });
    case USER_SIGN_OUT:
      return produce(state, (draft) => {
        draft.profile = null;
      });
    default:
      return state;
  }
}
