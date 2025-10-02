import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import appReducer from "./appSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, app: appReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
