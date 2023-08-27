import classes from "./MainGrid.module.css";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../Store/fetchingActions";

function MainGrid() {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies);
  const error = useSelector((state) => state.error.fetchingError);
  const [pageNo, setPageNo] = useState(1);

  const imageUrlBase = "https://image.tmdb.org/t/p/w500";
  const category = movieData.category;

  useEffect(() => {
    dispatch(fetchMovies({ category }));
  }, [dispatch, category]);

  function forthHandler() {
    setPageNo(pageNo + 1);
    console.log(pageNo);
    dispatch(fetchMovies({ category, pageNo }));
  }

  function backHandler() {
    setPageNo(pageNo - 1);
    console.log(pageNo);
    dispatch(fetchMovies({ category, pageNo }));
  }
  return (
    <>
      <Filter />
      {error && <p className={classes.error}>{error}</p>}
      <div className={classes["main-grid"]}>
        {movieData.results.map((item) => (
          <MovieCard
            item={item}
            key={item.id}
            id={item.id}
            imgUrl={`${imageUrlBase}${item.poster_path}`}
          />
        ))}
      </div>
      <div className={classes.action}>
        <button onClick={backHandler}>&lt;</button>
        <button onClick={forthHandler}>&gt;</button>
      </div>
    </>
  );
}

export default MainGrid;
