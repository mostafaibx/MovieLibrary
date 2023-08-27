import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showList: false,
  showCreateList: false,
  showListMenu: false,
  lists: [],
  listItems: [],
  listName: "",
  listId: "",
};

const ListSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    toggleList(state) {
      state.showList = !state.showList;
    },
    toggleCreateList(state) {
      state.showCreateList = !state.showCreateList;
    },
    toggleListMenue(state) {
      state.showListMenu = !state.showListMenu;
    },
    getLists(state, action) {
      state.lists = action.payload;
    },
    getListItems(state, action) {
      state.listItems = action.payload.items;
    },
    getListDetails(state, action) {
      state.listName = action.payload.listName;
      state.listId = action.payload.listId;
    },
  },
});

export const {
  toggleList,
  toggleCreateList,
  toggleListMenue,
  getLists,
  getListItems,
  getListDetails,
} = ListSlice.actions;

export default ListSlice.reducer;
