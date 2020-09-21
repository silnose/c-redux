import axios from "axios";
import {
  GET_ALL,
  LOADING,
  ERROR,
  UPDATE,
  UPDATE_WITH_COMMENTS,
  LOADING_COMMENTS,
  ERROR_COMMENTS,
} from "../types/postsTypes.js";
import * as usersTypes from "../types/usersTypes.js";
const { GET_ALL: GET_ALL_USER } = usersTypes;
const apiURL = "https://jsonplaceholder.typicode.com";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(apiURL);
    const data = response.data;
    dispatch({
      type: GET_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getAllByUser = (key) => async (dispatch, getState) => {
  const { users } = getState().userReducer;
  const { posts } = getState().postReducer;
  const userId = users[key].id;
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(`${apiURL}/posts?userId=${userId}`);
    const data = response.data;

    const postsWithComments = data.map((item) => ({
      ...item,
      comments: [],
      isOpen: false,
    }));
    const updatedPosts = [...posts, postsWithComments];
    const postsKey = updatedPosts.length - 1;
    const updatedUsers = [...users];
    updatedUsers[key] = { ...users[key], postsKey };

    dispatch({
      type: UPDATE,
      payload: updatedPosts,
    });

    dispatch({
      type: GET_ALL_USER,
      payload: updatedUsers,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const openClose = (postsKey, index) => async (dispatch, getState) => {
  const { posts } = getState().postReducer;
  const postSelected = posts[postsKey][index];
  const postUpdated = { ...postSelected, isOpen: !postSelected.isOpen };

  const updatedPosts = [...posts];
  updatedPosts[postsKey] = [...posts[postsKey]];
  updatedPosts[postsKey][index] = postUpdated;

  dispatch({
    type: UPDATE,
    payload: updatedPosts,
  });
};

export const getComments = (postsKey, index) => async (dispatch, getState) => {
  const { posts } = getState().postReducer;
  const postSelected = posts[postsKey][index];

  dispatch({
    type: LOADING_COMMENTS,
  });

  try {
    const response = await axios.get(
      `${apiURL}/comments?postId=${postSelected.id}`
    );
    const data = response.data;
    const updatedPosts = [...posts];
    const postUpdated = { ...postSelected, comments: data };
    updatedPosts[postsKey] = [...posts[postsKey]];
    updatedPosts[postsKey][index] = postUpdated;

    dispatch({
      type: UPDATE_WITH_COMMENTS,
      payload: updatedPosts,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR_COMMENTS,
      payload: error.message,
    });
  }
};
