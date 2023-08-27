import classes from "./UserCard.module.css";
import userImg from "../../assets/userImg.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getUserData } from "../../Store/AuthenticationActions";

function UserCard() {
  const username = useSelector((state) => state.auth.displayName);
  const lists = useSelector((state) => state.list.lists);
  const dispatch = useDispatch();

  let listNumber;
  if (listNumber) {
    listNumber = Object.keys(lists).length;
  } else {
    listNumber = 0;
  }
  console.log(listNumber);
  dispatch(getUserData());

  return (
    <div className={classes["user-card"]}>
      <div className={classes.image}>
        <img src={userImg} alt="Profile" />
      </div>
      <div className={classes.details}>
        <p>User Name: {username}</p>
        <p>number of lists: {listNumber}</p>
      </div>
    </div>
  );
}
export default UserCard;
