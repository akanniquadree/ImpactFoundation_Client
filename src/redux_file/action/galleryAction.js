import axios from "axios";
import {
  GALLERY_DELETE_FAIL,
  GALLERY_DELETE_REQUEST,
  GALLERY_DELETE_SUCCESS,
  GALLERY_LIST_FAIL,
  GALLERY_LIST_REQUEST,
  GALLERY_LIST_SUCCESS,
  GALLERY_SAVE_FAIL,
  GALLERY_SAVE_REQUEST,
  GALLERY_SAVE_SUCCESS,
} from "../constant/galleryConstant";
import Cookie from "js-cookie";

const galleryList = () => async (dispatch) => {
  dispatch({ type: GALLERY_LIST_REQUEST });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_Api_EndPoint}/gallery`
    );
    dispatch({ type: GALLERY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GALLERY_LIST_FAIL, payload: error.message });
  }
};

const saveGallery = (gallery, filename) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("img", filename);
  try {
    dispatch({ type: GALLERY_SAVE_REQUEST, payload: gallery });
    const {
      login: { userInfo },
    } = getState();
    if (!gallery._id) {
      const { data } = await axios.post(
        `${process.env.REACT_APP_Api_EndPoint}/gallery`,
        formData,
        {
          headers: { Authorization: "Bearer " + userInfo.token },
        }
      );
      dispatch({ type: GALLERY_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `${process.env.REACT_APP_Api_EndPoint}/gallery/`,
        +gallery._id,
        formData,
        {
          headers: { Authorization: "Bearer " + userInfo.token },
        }
      );
      dispatch({ type: GALLERY_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: GALLERY_SAVE_FAIL, payload: error.message });
  }
};
const deleteGallery = (galleryId) => async (dispatch, getState) => {
  try {
    const {
      login: { userInfo },
    } = getState();
    dispatch({ type: GALLERY_DELETE_REQUEST, payload: galleryId });
    const { data } = await axios.delete(
      `${process.env.REACT_APP_Api_EndPoint}/gallery/` + galleryId,
      {
        headers: {
          Authorization: "Bearer  " + userInfo.token,
        },
      }
    );
    dispatch({ type: GALLERY_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GALLERY_DELETE_FAIL, payload: error.message });
  }
};

export { galleryList, saveGallery, deleteGallery };
