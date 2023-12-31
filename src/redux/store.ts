import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import layoutSilce from "./slice/layoutSilce";

const middleware = [];

if (process.env.NODE_ENV === "development") middleware.push(logger);

const store = configureStore({
  reducer: {
    layout: layoutSilce,
  },
  middleware,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
