import { createSlice } from "@reduxjs/toolkit";

import { BACKGROUND, INTRO } from "@/constants";

import type { InitialState } from "./index.types";

const initialState: InitialState = {
  animation: INTRO,
  background: "home",
  backgroundNext: null,
};

const backgroundSlice = createSlice({
  name: BACKGROUND,
  initialState,
  reducers: {
    _backgroundSetAnimation: (state, action) => {
      const { payload } = action;
      state.animation = payload;
    },
    _backgroundSetBackground: (state, action) => {
      const { payload } = action;
      state.background = payload;
    },
    _backgroundSetNextBackground: (state, action) => {
      const { payload } = action;
      state.backgroundNext = payload;
    },
  },
});

export const {
  _backgroundSetBackground,
  _backgroundSetNextBackground,
  _backgroundSetAnimation,
} = backgroundSlice.actions;
export const backgroundReducer = backgroundSlice.reducer;
