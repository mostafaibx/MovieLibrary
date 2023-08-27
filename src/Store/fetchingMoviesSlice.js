import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  category: "Suggested",
  searchText: "",
  selectedItem: {},
  showCard: false,
};

const movieFetchingSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    allMovies(state, action) {
      state.results = action.payload.results;
    },
    selectedFilter(state, action) {
      state.category = action.payload;
    },
    showInCard(state, action) {
      state.selectedItem = action.payload;
    },
    showMovieCard(state) {
      state.showCard = !state.showCard;
    },
  },
});

export const { allMovies, selectedFilter, showInCard, showMovieCard } =
  movieFetchingSlice.actions;

export default movieFetchingSlice.reducer;
