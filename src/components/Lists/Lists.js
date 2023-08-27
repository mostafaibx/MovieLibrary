import classes from "./Lists.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListItemsAction, getListAction } from "../../Store/ListAction";
import {
  getListDetails,
  toggleCreateList,
  toggleList,
} from "../../Store/ListsSlice";

function Lists() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.list.lists);

  useEffect(() => {
    dispatch(getListAction());
  }, []);

  function showListHandler(event) {
    const listId = event.target.id;
    const listName = event.target.title;
    dispatch(getListDetails({ listName, listId }));
    dispatch(toggleList());
    dispatch(getListItemsAction());
  }

  function openCreateListHandler() {
    dispatch(toggleCreateList());
  }

  return (
    <div>
      <div className={classes.lists}>
        <h2>Your Lists</h2>
        <ul>
          {!lists && <p>No Lists to show</p>}
          {lists &&
            Object.entries(lists).map(([key, item]) => (
              <li
                key={key}
                id={key}
                title={item.name}
                onClick={showListHandler}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
      <button onClick={openCreateListHandler}>Create New List</button>
    </div>
  );
}

export default Lists;
