import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
  fetchingError: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
      console.log(state.error);
    },
    setFetchingError(state, action) {
      state.fetchingError = action.payload;
    },
  },
});

export const { setError, setFetchingError } = errorSlice.actions;

export default errorSlice.reducer;
