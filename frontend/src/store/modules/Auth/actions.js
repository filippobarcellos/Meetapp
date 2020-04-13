import { toast } from "react-toastify";
import api from "../../../services/api";
import history from "../../../services/history";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const USER_SIGN_OUT = "USER_SIGN_OUT";

export const signIn = (email, password) => async (dispatch) => {
  const body = { email, password };

  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await api.post("/sessions", body);
    api.defaults.headers["Authorization"] = `Bearer ${res.data.token}`;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const signUp = (name, email, password) => async (dispatch) => {
  const body = { name, email, password };

  dispatch({ type: REGISTER_REQUEST });

  try {
    const res = await api.post("/users", body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    toast.success("User was created. Please login");
    history.push("/");
  } catch (err) {
    dispatch({
      type: REGISTER_FAILED,
    });
  }
};

export const signOut = () => {
  history.push("/");
  return {
    type: USER_SIGN_OUT,
  };
};
