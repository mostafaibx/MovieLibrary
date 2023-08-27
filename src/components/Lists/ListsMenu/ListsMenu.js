import classes from "./ListsMenu.module.css";
import Modal from "../../../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleListMenue } from "../../../Store/ListsSlice";
import { additemsAction } from "../../../Store/ListAction";

function ListsMenu() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.list.lists);

  function closeCardHandler() {
    dispatch(toggleListMenue());
  }

  function addToListHandler(event) {
    const listId = event.target.id;
    dispatch(additemsAction(listId));
    dispatch(toggleListMenue());
  }

  return (
    <Modal>
      <div className={classes.list}>
        <button className={classes.close} onClick={closeCardHandler}>
          X
        </button>
        <h1>Your Lists</h1>
        <ul>
          {Object.entries(lists).map(([key, item]) => (
            <div
              className={classes.item}
              id={key}
              name={item.name}
              onClick={addToListHandler}
            >
              <li key={key}>{item.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

export default ListsMenu;
