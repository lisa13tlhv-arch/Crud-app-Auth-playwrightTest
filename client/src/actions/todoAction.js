// import axios from 'axios';
import {
  GET_ALL_TODOS_REQUEST,
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS_FAIL,
  ADD_NEW_TODO_REQUEST,
  ADD_NEW_TODO_SUCCESS,
  ADD_NEW_TODO_FAIL,
  TODO_DELETE,
  TODO_DELETE_FAIL,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_FAIL,
  TODO_COMPLETE_REQUEST,
  TODO_INCOMPLETE_REQUEST,
} from '../constants/todoConstant';
import {axiosInstance} from '../config';

export const getAllTodos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_TODOS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.get(`/api/todos`, config);

    dispatch({
      type: GET_ALL_TODOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_TODOS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewTodo = (title, description) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ADD_NEW_TODO_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.post(
      `/api/todos`,
      { title, description },
      config
    );

    dispatch({
      type: ADD_NEW_TODO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_NEW_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const completeTodo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TODO_COMPLETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

     const { data } = await axiosInstance.put(
      `/api/todos/${id}/complete`,
      config
    );

    dispatch({
      type: TODO_COMPLETE_REQUEST,
      payload: data,
    });
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: TODO_COMPLETE_REQUEST,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    return Promise.reject(error);
  }
};

export const incompleteTodo = (id) => async (dispatch, getState) => {
   try {
    dispatch({
      type: TODO_INCOMPLETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

     const { data } = await axiosInstance.put(
      `/api/todos/${id}/incomplete`,
      config
    );

    dispatch({
      type: TODO_INCOMPLETE_REQUEST,
      payload: data,
    });
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: TODO_INCOMPLETE_REQUEST,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    return Promise.reject(error);
  }
};

export const deleteTodo = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axiosInstance.delete(`/api/todos/${id}`, config);

    dispatch({
      type: TODO_DELETE,
    });
  } catch (error) {
    dispatch({
      type: TODO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editTodo = (id, title, description) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: TODO_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axiosInstance.put(
      `/api/todos/${id}`,
      { title, description },
      config
    );

    dispatch({
      type: TODO_UPDATE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TODO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};