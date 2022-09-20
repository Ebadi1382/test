import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { usesrsReducer, postsReducer, commentsReducer } from "./reducer";
const reducers = combineReducers({
  users: usesrsReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
const middleWare = [thunk];
const initialState = {};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
