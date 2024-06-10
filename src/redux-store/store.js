import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import bookReducer from "../features/books/bookSlice";
import burrowReducer from "../features/burrows/burrowSlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
    burrowInfo: burrowReducer,
  },
});
