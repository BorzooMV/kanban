import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer: {
    root: reducer,
  },
});

export default store;
