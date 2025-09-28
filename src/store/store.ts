import { configureStore } from "@reduxjs/toolkit";

import { INTERFACE, MODAL, BACKGROUND } from "@/constants";
import { backgroundReducer, interfaceReducer, modalReducer } from "./slices";

export const store = configureStore({
  reducer: {
    [BACKGROUND]: backgroundReducer,
    [INTERFACE]: interfaceReducer,
    [MODAL]: modalReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: true,
  // For CRUD operations implementation is pending
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type RootState = ReturnType<typeof store.getState>;
