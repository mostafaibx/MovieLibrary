import classes from "./MovieMidCrd.module.css";
import Modal from "../../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { showMovieCard } from "../../Store/fetchingMoviesSlice";
import { toggleListMenue } from "../../Store/ListsSlice";
import { toggleLogin } from "../../Store/AuthenticationSlice";

function MovieMidCard() {
  const imageUrlBase = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movies.selectedItem);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function closeHandler() {
    dispatch(showMovieCard());
  }
  function showMoviesList() {
    if (isLoggedIn) {
      dispatch(toggleListMenue());
    } else {
      dispatch(toggleLogin({ user: null, showLogin: true }));
    }
  }
  return (
    <Modal>
      <div className={classes.card}>
        <button className={classes.close} onClick={closeHandler}>
          X
        </button>
        <div className={classes.image}>
          <img
            alt="poster"
            src={`${imageUrlBase}${selectedMovie.poster_path}`}
          ></img>
        </div>
        <div className={classes.text}>
          <h1>{selectedMovie.title}</h1>
          <h4>Release Date: {selectedMovie.release_date}</h4>
          <p>Description: {selectedMovie.overview}</p>
          <h3>Rated: {selectedMovie.vote_average}/10 </h3>
          <button onClick={showMoviesList}>Add to List</button>
        </div>
      </div>
    </Modal>
  );
}

export default MovieMidCard;
