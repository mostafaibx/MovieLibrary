import classes from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { selectedFilter } from "../../Store/fetchingMoviesSlice";

function Filter() {
  const dispatch = useDispatch();

  function categoryHandler(event) {
    const category = event.target.textContent;
    dispatch(selectedFilter(category));
  }

  return (
    <div className={classes.filter}>
      <ul>
        <li onClick={categoryHandler}>Suggested</li>
        <li onClick={categoryHandler}>Action</li>
        <li onClick={categoryHandler}>Horror</li>
        <li onClick={categoryHandler}>Commedy</li>
        <li onClick={categoryHandler}>Drama</li>
        <li onClick={categoryHandler}>War</li>
      </ul>
    </div>
  );
}

export default Filter;
