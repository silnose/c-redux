import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import postReducer from "./postReducer.js";
import taskReducer from "./taskReducer.js";

export default combineReducers({ userReducer, postReducer, taskReducer });
