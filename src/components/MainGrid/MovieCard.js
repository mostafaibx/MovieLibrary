import classes from "./MovieCaed.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showInCard, showMovieCard } from "../../Store/fetchingMoviesSlice";

function MovieCard(props) {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  function showTitleHandler() {
    setIsShown(!isShown);
  }

  function showMovieHandler(item) {
    dispatch(showInCard(item));
    dispatch(showMovieCard());
  }

  return (
    <div
      onClick={showMovieHandler.bind(null, props.item)}
      onMouseEnter={showTitleHandler}
      onMouseLeave={showTitleHandler}
      className={classes["movie-card"]}
    >
      <div className={classes["movie-image"]}>
        <img src={props.imgUrl} alt="poster"></img>
      </div>
      {isShown && (
        <div className={classes["card-text"]}>
          <h2>{props.item.title}</h2>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
