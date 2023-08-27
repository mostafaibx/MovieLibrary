import classes from "./ListCard.module.css";
import Modal from "../../UI/Modal";
import ListItem from "./ListItem";
import { toggleList } from "../../Store/ListsSlice";
import { useDispatch, useSelector } from "react-redux";

function ListCard() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.list.listItems);
  const listName = useSelector((state) => state.list.listName);

  function closeCardHandler() {
    dispatch(toggleList());
  }

  return (
    <Modal>
      <div className={classes.list}>
        <button className={classes.close} onClick={closeCardHandler}>
          X
        </button>
        <h1>{listName}</h1>
        <ul>
          {movies &&
            Object.entries(movies).map(([key, value]) => (
              <ListItem key={key} title={value.title} id={key}></ListItem>
            ))}
        </ul>
      </div>
    </Modal>
  );
}

export default ListCard;
