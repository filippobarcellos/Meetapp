import produce from "immer";

import {
  CREATE_MEETUP_REQUEST,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILED,
} from "./actions";

const INITIAL_STATE = {
  meetups: [],
  loading: false,
};

const meetup = produce((draft = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_MEETUP_REQUEST:
      draft.loading = true;
      return draft;
    case CREATE_MEETUP_SUCCESS:
      draft.loading = false;
      draft.meetups.push(payload);
      return draft;
    case CREATE_MEETUP_FAILED:
      draft.loading = false;
      return draft;
    default:
      return draft;
  }
});

export default meetup;
