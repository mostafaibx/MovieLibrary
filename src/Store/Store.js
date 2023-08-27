import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import fetchingMoviesReducer from "./fetchingMoviesSlice";
import sideBarReducer from "./SidebarSlice";
import AuthenticationReducer from "./AuthenticationSlice";
import ListReducer from "./ListsSlice";
import errorReducer from "./ErrorSlice";

export const store = configureStore({
  reducer: {
    movies: fetchingMoviesReducer,
    sideBar: sideBarReducer,
    auth: AuthenticationReducer,
    list: ListReducer,
    error: errorReducer,
  },
  middleware: [thunk],
});
