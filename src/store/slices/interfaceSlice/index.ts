import { createSlice } from "@reduxjs/toolkit";

import { INTERFACE } from "@/constants";

import type { InitialState } from "./index.types";
import { FANCY_BACKGROUND_HOME } from "@/components/organisms/FancyBackground/utils";

const initialState: InitialState = {
  height: 0,
  width: 0,
  activeLink: FANCY_BACKGROUND_HOME,
};

const interfaceSlice = createSlice({
  name: INTERFACE,
  initialState,
  reducers: {
    _interfaceSetWindowDimensions: (state, action) => {
      const { payload } = action;
      state.height = payload.height;
      state.width = payload.width;
    },

    _interfaceSetActiveLink: (state, action) => {
      const { payload } = action;
      state.activeLink = payload;
    },
  },
});

export const { _interfaceSetWindowDimensions, _interfaceSetActiveLink } =
  interfaceSlice.actions;
export const interfaceReducer = interfaceSlice.reducer;
