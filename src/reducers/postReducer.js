import {
  GET_ALL,
  LOADING,
  ERROR,
  UPDATE,
  UPDATE_WITH_COMMENTS,
  ERROR_COMMENTS,
  LOADING_COMMENTS,
} from "../types/postsTypes.js";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: "",
  loadingComments: false,
  errorComments: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
    case UPDATE:
      return { ...state, posts: action.payload, loading: false, error: "" };
    case UPDATE_WITH_COMMENTS:
      return {
        ...state,
        posts: action.payload,
        loadingComments: true,
        errorComments: "",
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOADING_COMMENTS:
      return { ...state, loadingComments: true, errorComments: "" };
    case ERROR_COMMENTS:
      return {
        ...state,
        loadingComments: false,
        errorComments: action.payload,
      };
    default:
      return state;
  }
};
