import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "tasks",
    initialState: {clicks: 7},
    reducers: {
      addClick(state, action) {state.clicks += 1;},
    },
  });

const { addClick } = rootSlice.actions;
const rootReducer = rootSlice.reducer;

export {rootReducer, addClick};