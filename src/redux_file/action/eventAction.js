import axios from "axios";
import {
  EVENT_DELETE_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_SAVE_FAIL,
  EVENT_SAVE_REQUEST,
  EVENT_SAVE_SUCCESS,
  SINGLEEVENT_LIST_FAIL,
  SINGLEEVENT_LIST_REQUEST,
  SINGLEEVENT_LIST_SUCCESS,
} from "../constant/eventConstant";

const eventList = () => async (dispatch) => {
  dispatch({ type: EVENT_LIST_REQUEST });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_Api_EndPoint}/event`
    );
    dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EVENT_LIST_FAIL, payload: error.message });
  }
};

const singleEvent = (EventId) => async (dispatch) => {
  dispatch({ type: SINGLEEVENT_LIST_REQUEST, payload: EventId });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_Api_EndPoint}/event/` + EventId
    );
    dispatch({ type: SINGLEEVENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SINGLEEVENT_LIST_FAIL, payload: error.message });
  }
};

const saveEvent = (event) => async (dispatch, getState) => {
  try {
    dispatch({ type: EVENT_SAVE_REQUEST, payload: event });
    const {
      login: { userInfo },
    } = getState();
    if (!event._id) {
      const { data } = await axios.post("/api/event", event, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      dispatch({ type: EVENT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put("/api/event/" + event._id, event, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      dispatch({ type: EVENT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: EVENT_SAVE_FAIL, payload: error.message });
  }
};

const deleteEvent = (EventId) => async (dispatch, getState) => {
  try {
    const {
      login: { userInfo },
    } = getState();
    dispatch({ type: EVENT_DELETE_REQUEST, payload: EventId });
    const { data } = await axios.delete("/api/event/" + EventId, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: EVENT_DELETE_SUCCESS, success: true, payload: data });
  } catch (error) {
    dispatch({ type: EVENT_DELETE_FAIL, payload: error.message });
  }
};

export { eventList, singleEvent, deleteEvent, saveEvent };
