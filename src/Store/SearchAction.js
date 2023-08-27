import axios from "axios";
import { allMovies } from "./fetchingMoviesSlice";

export const searchMovies = (searchText) => {
  return async (dispatch) => {
    const api = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;

    const movies = [];
    let currentPage = 1;

    const response = await axios.get(api, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFkNTM2M2I5MGVkYzBhMmU4YmMxMTcyYjA5YWY5YSIsInN1YiI6IjY0ZGE2ZWUyNTllOGE5MDBmZmZkN2NhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y2x-gFNl_gP4Ap4hHtBteP21JqzsURNOocV3fofTtEE",
      },
      params: { page: currentPage },
    });

    const movieData = response.data;
    movies.push(...movieData.results);

    dispatch(
      allMovies({
        results: movies || [],
      })
    );
  };
};
