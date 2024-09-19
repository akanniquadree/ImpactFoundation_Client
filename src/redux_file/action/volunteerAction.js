import axios from "axios";
import {
  VOLUNTEER_LIST_FAIL,
  VOLUNTEER_LIST_REQUEST,
  VOLUNTEER_LIST_SUCCESS,
} from "../constant/volunteerConstant";

const volunteerList =
  (name, email, add, occu, msg, phone, dob) => async (dispatch) => {
    dispatch({
      type: VOLUNTEER_LIST_REQUEST,
      payload: name,
      email,
      add,
      occu,
      msg,
      phone,
      dob,
    });
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_Api_EndPoint}/sponsor/vonlunteer/` +
          { name, email, add, occu, msg, phone, dob }
      );
      dispatch({ type: VOLUNTEER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: VOLUNTEER_LIST_FAIL, payload: error.message });
    }
  };

export { volunteerList };
