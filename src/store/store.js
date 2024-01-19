import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
