import classes from "./ListItem.module.css";
import { removeMovieAction } from "../../Store/ListAction";
import { useDispatch } from "react-redux";

function ListItem(props) {
  const dispatch = useDispatch();

  function removeMovieHandler(event) {
    const movieId = event.target.id;
    dispatch(removeMovieAction(movieId));
  }

  return (
    <div className={classes.item}>
      <li> {props.title}</li>
      <button id={props.id} onClick={removeMovieHandler}>
        remove
      </button>
    </div>
  );
}

export default ListItem;
