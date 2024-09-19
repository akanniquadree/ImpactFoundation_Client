import {
  TEAM_DELETE_FAIL,
  TEAM_DELETE_REQUEST,
  TEAM_DELETE_SUCCESS,
  TEAM_LIST_FAIL,
  TEAM_LIST_REQUEST,
  TEAM_LIST_SUCCESS,
  TEAM_SAVE_FAIL,
  TEAM_SAVE_REQUEST,
  TEAM_SAVE_SUCCESS,
} from "../constant/teamConstant";
import axios from "axios";

const teamList = () => async (dispatch) => {
  try {
    dispatch({ type: TEAM_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_Api_EndPoint}/team`
    );
    dispatch({ type: TEAM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEAM_LIST_FAIL, payload: error.message });
  }
};

const saveTeam = (team) => async (dispatch, getState) => {
  try {
    dispatch({ type: TEAM_SAVE_REQUEST, payload: team });
    const {
      login: { userInfo },
    } = getState();
    if (!team._id) {
      const { data } = await axios.post(
        `${process.env.Api_EndPoint}/team/`,
        team,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      dispatch({ type: TEAM_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `${process.env.Api_EndPoint}/team/` + team._id,
        team,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      dispatch({ type: TEAM_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: TEAM_SAVE_FAIL, payload: error.message });
  }
};

const deleteTeam = (TeamId) => async (dispatch, getState) => {
  try {
    const {
      login: { userInfo },
    } = getState();
    dispatch({ type: TEAM_DELETE_REQUEST, payload: TeamId });
    const { data } = await axios.delete(
      `${process.env.Api_EndPoint}/team/` + TeamId,
      { headers: { Authorization: "Bearer " + userInfo.token } }
    );
    dispatch({ type: TEAM_DELETE_SUCCESS, success: true, payload: data });
  } catch (error) {
    dispatch({ type: TEAM_DELETE_FAIL, payload: error.message });
  }
};

export { teamList, saveTeam, deleteTeam };
