import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";

const store = configureStore({
  reducer: {
  reduceer: authReducer
  },
});

export default store;
