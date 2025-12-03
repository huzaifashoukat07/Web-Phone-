import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./services/chatApi";
import chatReducer from "./slices/chatSlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  [chatApi.reducerPath]: chatApi.reducer,
  chat: chatReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
