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

export const usesrsReducer = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case usersLoading:
      return payload;
    case usersSuccess:
      return payload;
    case usersFailed:
      return payload;
    default:
      return state;
  }
};
export const postsReducer = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case postsLoading:
      return payload;
    case postsSuccess:
      return payload;
    case postsFailed:
      return payload;
    default:
      return state;
  }
};
export const commentsReducer = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case commentsLoading:
      return payload;
    case commentsSuccess:
      return payload;
    case commentsFailed:
      return payload;
    default:
      return state;
  }
};
