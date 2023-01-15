import { configureStore } from "@reduxjs/toolkit";
import vesselsReducer from "./vessels/reducer";

export const store = configureStore({
  reducer: {
    vessels: vesselsReducer,
  },
});
