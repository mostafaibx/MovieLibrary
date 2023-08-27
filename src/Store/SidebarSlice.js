import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideBar: false,
};

const SideBarSlice = createSlice({
  name: "SideBar",
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const { toggleSideBar } = SideBarSlice.actions;

export default SideBarSlice.reducer;
