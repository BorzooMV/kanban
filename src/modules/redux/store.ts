import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

// FIXME: fix root type error
const store = configureStore({
  reducer: {
    root: reducer,
  },
});

export default store;
