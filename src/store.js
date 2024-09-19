import { applyMiddleware, combineReducers, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import {
  blogReducer,
  catReducer,
  deleteBlogReducer,
  DetailBlogReducer,
  saveBlogReducer,
} from "./redux_file/reducer/blogReducer";
import {
  userLoginReducer,
  userReducer,
} from "./redux_file/reducer/userReducer";
import Cookie from "js-cookie";
import { CommentReducer } from "./redux_file/reducer/commentReducer";
import {
  deleteTeamReducer,
  saveTeamReducer,
  TeamReducer,
} from "./redux_file/reducer/teamReducer";
import { volunteerReducer } from "./redux_file/reducer/volunteerReducer";
import {
  deleteSponsorReducer,
  saveSponsorReducer,
  sponsorReducer,
} from "./redux_file/reducer/sponsorReducer";
import {
  deleteGalleryReducer,
  galleryReducer,
  saveGalleryReducer,
} from "./redux_file/reducer/galleryReducer";
import {
  deleteEventReducer,
  eventReducer,
  saveEventReducer,
  singleEventReducer,
} from "./redux_file/reducer/eventReducer";
import {
  deleteProjectReducer,
  projectReducer,
  projectSaveReducer,
  singleprojectReducer,
} from "./redux_file/reducer/projectReducer";

// const userInfo = Cookie.getJSON("userInfo") || null;
const userInfo = null;

const initialState = { login: { userInfo } };

const reducer = combineReducers({
  blogPost: blogReducer,
  DetailBlog: DetailBlogReducer,
  Blog: saveBlogReducer,
  DeleteBlog: deleteBlogReducer,
  Cat: catReducer,
  register: userReducer,
  login: userLoginReducer,
  Comment: CommentReducer,
  teamMem: TeamReducer,
  SaveTeam: saveTeamReducer,
  DeleteTeam: deleteTeamReducer,
  voluntee: volunteerReducer,
  Sponsor: sponsorReducer,
  SaveSponsor: saveSponsorReducer,
  DeleteSponsor: deleteSponsorReducer,
  Gallery: galleryReducer,
  SaveGallery: saveGalleryReducer,
  DeleteGallery: deleteGalleryReducer,
  Event: eventReducer,
  SingleEvent: singleEventReducer,
  SaveEvent: saveEventReducer,
  DeleteEvent: deleteEventReducer,
  Project: projectReducer,
  SingleProject: singleprojectReducer,
  SaveProject: projectSaveReducer,
  DeleteProject: deleteProjectReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
