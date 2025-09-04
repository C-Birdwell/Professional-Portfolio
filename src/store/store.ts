import { configureStore } from "@reduxjs/toolkit";

import { EXAMPLE, INTERFACE, MODAL, BACKGROUND } from "@/constants";
import {
  backgroundReducer,
  exampleReducer,
  interfaceReducer,
  modalReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    [BACKGROUND]: backgroundReducer,
    [INTERFACE]: interfaceReducer,
    [EXAMPLE]: exampleReducer,
    [MODAL]: modalReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: true,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type RootState = ReturnType<typeof store.getState>;
