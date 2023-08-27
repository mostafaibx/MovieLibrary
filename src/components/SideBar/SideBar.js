import classes from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../Store/SidebarSlice";
import UserCard from "../UserDetails/UserCard";
import Lists from "../Lists/Lists";

function SideBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  function closeSidebarHandler() {
    dispatch(toggleSideBar());
  }

  return (
    <div onMouseLeave={closeSidebarHandler} className={classes["side-bar"]}>
      {!isLoggedIn && (
        <p className={classes.login}>Please Login for full functionality</p>
      )}
      {isLoggedIn && (
        <>
          <UserCard />
          <Lists />
        </>
      )}
    </div>
  );
}

export default SideBar;
