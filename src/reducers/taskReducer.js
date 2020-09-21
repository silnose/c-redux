import {
  GET_ALL_TASKS,
  LOADING,
  ERROR,
  UPDATE_TITLE,
  UPDATE_USER_ID,
  ADDED,
  EDITED,
  UPDATE_CHECKBOX,
  DELETED,
  CLEAR,
} from "../types/tasksTypes.js";

const INITIAL_STATE = {
  tasks: [],
  loading: false,
  error: "",
  userId: "",
  title: "",
  redirect: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: "",
        userId: "",
        title: "",
        redirect: false,
      };
    case LOADING:
      return { ...state, loading: true, error: "" };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_TITLE:
      return { ...state, title: action.payload, loading: false, error: "" };
    case UPDATE_USER_ID:
      return { ...state, userId: action.payload, loading: false, error: "" };
    case UPDATE_CHECKBOX:
      return { ...state, tasks: action.payload, loading: false, error: "" };
    case ADDED:
    case EDITED:
      return {
        ...state,
        tasks: {},
        loading: false,
        error: "",
        redirect: true,
        title: "",
        userId: "",
      };
    case DELETED:
      return { ...state, tasks: {}, loading: false, error: "" };
    case CLEAR:
      return { ...state, loading: false, error: "", userId: "", title: "" };
    default:
      return state;
  }
};
