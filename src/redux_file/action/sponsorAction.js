import axios from "axios";
import {
  SPONSOR_DELETE_FAIL,
  SPONSOR_DELETE_REQUEST,
  SPONSOR_DELETE_SUCCESS,
  SPONSOR_LIST_FAIL,
  SPONSOR_LIST_REQUEST,
  SPONSOR_LIST_SUCCESS,
  SPONSOR_SAVE_FAIL,
  SPONSOR_SAVE_REQUEST,
  SPONSOR_SAVE_SUCCESS,
} from "../constant/sponsorConstant";

const sponsorList = () => async (dispatch) => {
  try {
    dispatch({ type: SPONSOR_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_Api_EndPoint}/sponsor/`
    );
    dispatch({ type: SPONSOR_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SPONSOR_LIST_FAIL, payload: error.message });
  }
};

const saveSponsor = (sponsor) => async (dispatch, getState) => {
  try {
    dispatch({ type: SPONSOR_SAVE_REQUEST, payload: sponsor });
    const {
      login: { userInfo },
    } = getState();
    if (!sponsor._id) {
      const { data } = await axios.post(
        `${process.env.REACT_APP_Api_EndPoint}/sponsor`,
        sponsor,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      dispatch({ type: SPONSOR_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `${process.env.REACT_APP_Api_EndPoint}/sponsor/` + sponsor._id,
        sponsor,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      dispatch({ type: SPONSOR_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: SPONSOR_SAVE_FAIL, payload: error.message });
  }
};

const deleteSponsor = (sponsorId) => async (dispatch, getState) => {
  try {
    const {
      login: { userInfo },
    } = getState();
    dispatch({ type: SPONSOR_DELETE_REQUEST, payload: sponsorId });
    const { data } = await axios.delete(
      `${process.env.REACT_APP_Api_EndPoint}/sponsor/` + sponsorId,
      { headers: { Authorization: "Bearer " + userInfo.token } }
    );
    dispatch({ type: SPONSOR_DELETE_SUCCESS, success: true, payload: data });
  } catch (error) {
    dispatch({ type: SPONSOR_DELETE_FAIL, payload: error.message });
  }
};

export { sponsorList, deleteSponsor, saveSponsor };
