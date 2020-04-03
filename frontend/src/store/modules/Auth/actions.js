import history from "../../../services/history";
import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const signIn = (email, password) => async dispatch => {
  const body = { email, password };

  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await axios.post("http://localhost:5000/sessions", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED
    });
  }
};
