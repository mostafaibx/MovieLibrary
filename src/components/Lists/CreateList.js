import classes from "./CreateList.module.css";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { toggleCreateList } from "../../Store/ListsSlice";
import { createListAction } from "../../Store/ListAction";

function CreateList() {
  const dispatch = useDispatch();

  function closeHandler() {
    dispatch(toggleCreateList());
  }

  function createListHandler(event) {
    event.preventDefault();
    const listName = event.target.listname.value;
    dispatch(createListAction(listName));
    dispatch(toggleCreateList());
  }

  return (
    <Modal>
      <div className={classes.create}>
        <button className={classes.close} onClick={closeHandler}>
          X
        </button>
        <h2>Create new list</h2>
        <form onSubmit={createListHandler}>
          <label htmlFor="list">Enter your list name</label>
          <input id="list" type="text" name="listname"></input>
          <button>Create</button>
        </form>
      </div>
    </Modal>
  );
}

export default CreateList;
