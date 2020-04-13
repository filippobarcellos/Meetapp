import api from "../../../services/api";
import history from "../../../services/history";

export const CREATE_MEETUP_REQUEST = "CREATE_MEETUP_REQUEST";
export const CREATE_MEETUP_SUCCESS = "CREATE_MEETUP_SUCCESS";
export const CREATE_MEETUP_FAILED = "CREATE_MEETUP_FAILED";

export const createMeetup = (data) => async (dispatch) => {
  dispatch({ type: CREATE_MEETUP_REQUEST });

  try {
    const res = await api.post("/meetups", data);

    dispatch({
      type: CREATE_MEETUP_SUCCESS,
      payload: res.data,
    });

    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: CREATE_MEETUP_FAILED });
  }
};
