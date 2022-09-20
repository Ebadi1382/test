import axios from "axios";
import {
  usersLoading,
  usersFailed,
  usersSuccess,
  postsLoading,
  postsSuccess,
  postsFailed,
  commentsLoading,
  commentsSuccess,
  commentsFailed,
} from "../constants";

export const usersAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: usersLoading,
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: usersSuccess,
      payload: { data: [...data], loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: usersFailed,
      payload: { data: [], loading: false, error: error.message },
    });
  }
};
export const postsAction = (userId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: postsLoading,
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    dispatch({
      type: postsSuccess,
      payload: { data: [...data], loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: postsFailed,
      payload: { data: [], loading: false, error: error.message },
    });
  }
};

export const commentsAction = (postId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: commentsLoading,
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    dispatch({
      type: commentsSuccess,
      payload: { data: [...data], loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: commentsFailed,
      payload: { data: [], loading: false, error: error.message },
    });
  }
};
