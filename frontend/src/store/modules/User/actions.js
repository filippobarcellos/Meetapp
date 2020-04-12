import axios from "axios";
import { toast } from "react-toastify";

export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILED = "UPDATE_PROFILE_FAILED";

export const updateProfile = (data) => async (dispatch) => {
  const { name, email, ...rest } = data;
  const profile = Object.assign({ name, email }, rest.oldPassword ? rest : {});
  dispatch({ type: UPDATE_PROFILE_REQUEST });

  try {
    const res = await axios.put("http://localhost:5000/users", profile);
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: {
        user: res.data,
      },
    });
    toast.success("Profile was updated");
  } catch (err) {
    dispatch({ type: UPDATE_PROFILE_FAILED });
  }
};
