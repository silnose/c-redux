import axios from "axios";
import { GET_ALL, LOADING, ERROR } from "../types/usersTypes.js";
const apiURL = "https://jsonplaceholder.typicode.com/users";

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
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
