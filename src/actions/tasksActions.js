import axios from "axios";
import {
  GET_ALL_TASKS,
  LOADING,
  ERROR,
  UPDATE_USER_ID,
  UPDATE_TITLE,
  ADDED,
  EDITED,
  UPDATE_CHECKBOX,
  DELETED,
  CLEAR,
} from "../types/tasksTypes.js";
const apiURL = "https://jsonplaceholder.typicode.com/todos";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(apiURL);
    const data = response.data;
    const tasks = {};
    data.map(
      (item) =>
        (tasks[item.userId] = { ...tasks[item.userId], [item.id]: { ...item } })
    );
    dispatch({
      type: GET_ALL_TASKS,
      payload: tasks,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const save = (task) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.post(`${apiURL}`, {
      task,
    });
    const data = response.data;
    dispatch({
      type: ADDED,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const edit = (task) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.put(`${apiURL}/${task.id}`, {
      task,
    });
    const data = response.data;
    dispatch({
      type: EDITED,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const remove = (taskId) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.delete(`${apiURL}/${taskId}`);
    const data = response.data;
    dispatch({
      type: DELETED,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const updateUserId = (newUserId) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_ID,
    payload: newUserId,
  });
};

export const updateTitle = (newTitle) => (dispatch) => {
  dispatch({
    type: UPDATE_TITLE,
    payload: newTitle,
  });
};

export const updateCheckBox = (userId, taskId) => (dispatch, getState) => {
  const { tasks } = getState().taskReducer;
  const taskSelected = tasks[userId][taskId];
  const tasksUpdated = { ...tasks };
  tasksUpdated[userId] = { ...tasks[userId] };
  tasksUpdated[userId][taskId] = {
    ...tasks[userId][taskId],
    completed: !taskSelected.completed,
  };

  dispatch({
    type: UPDATE_CHECKBOX,
    payload: tasksUpdated,
  });
};

export const clear = () => (dispatch) => {
  dispatch({
    type: CLEAR,
  });
};
