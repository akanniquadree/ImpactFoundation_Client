import axios from "axios";
import {
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_SAVE_FAIL,
  PROJECT_SAVE_REQUEST,
  PROJECT_SAVE_SUCCESS,
  SINGLEPROJECT_LIST_FAIL,
  SINGLEPROJECT_LIST_REQUEST,
  SINGLEPROJECT_LIST_SUCCESS,
} from "../constant/projectConstant";

const projectList = () => async (dispatch) => {
  dispatch({ type: PROJECT_LIST_REQUEST });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_Api_EndPoint}/project`
    );
    dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT_LIST_FAIL, payload: error.message });
  }
};

const singleProject = (projectId) => async (dispatch) => {
  dispatch({ type: SINGLEPROJECT_LIST_REQUEST, payload: projectId });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_Api_EndPoint}/project/` + projectId
    );
    dispatch({ type: SINGLEPROJECT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SINGLEPROJECT_LIST_FAIL, payload: error.message });
  }
};

const saveProject = (project) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_SAVE_REQUEST });
    const {
      login: { userInfo },
    } = getState();
    if (!project._id) {
      const { data } = await axios.post("/api/project", project, {
        headers: {
          Authorization: "Bearer " + userInfo,
        },
      });
      dispatch({ type: PROJECT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put("/api/project/", project, {
        headers: {
          Authorization: "Bearer " + userInfo,
        },
      });
      dispatch({ type: PROJECT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PROJECT_SAVE_FAIL, payload: error.message });
  }
};

const deleteProject = (projectId) => async (dispatch, getState) => {
  try {
    const {
      login: { userInfo },
    } = getState();
    dispatch({ type: PROJECT_DELETE_REQUEST, payload: projectId });
    const { data } = await axios.delete("/api/project/" + projectId, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({ type: PROJECT_DELETE_SUCCESS, success: true, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT_DELETE_FAIL, payload: error.message });
  }
};

export { projectList, singleProject, saveProject, deleteProject };
