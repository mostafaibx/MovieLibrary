import axios from "axios";
import { allMovies } from "./fetchingMoviesSlice";
import { setFetchingError } from "./ErrorSlice";

//fetching data from TMDB API using axios
export const fetchMovies = ({ category, pageNo }) => {
  return async (dispatch) => {
    let api;
    let baseurl =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    //switch the url based on selected category
    if (category === "Suggested") {
      api = baseurl;
    }
    if (category === "Action") {
      api = baseurl + "&with_genres=28";
    }
    if (category === "Commedy") {
      api = baseurl + "&with_genres=35";
    }
    if (category === "Drama") {
      api = baseurl + "&with_genres=18";
    }
    if (category === "War") {
      api = baseurl + "&with_genres=10752";
    }
    if (category === "Horror") {
      api = baseurl + "&with_genres=27";
    }

    //request the data from the api using the page number
    const movies = [];
    let currentPage = pageNo;

    try {
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
      dispatch(setFetchingError(""));

      dispatch(
        allMovies({
          results: movies || [],
        })
      );
    } catch (error) {
      dispatch(setFetchingError(error.message));
    }
  };
};
