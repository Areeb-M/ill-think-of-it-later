import { configureStore } from "@reduxjs/toolkit";
import listsManagerReducer from "./features/list/ListsManagerSlice";

const store = configureStore({
  reducer: {
    listsManager: listsManagerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
