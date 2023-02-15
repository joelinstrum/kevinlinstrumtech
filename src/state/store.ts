import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import galleryReducer from "./features/gallerySlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    galleryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
