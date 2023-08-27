import classes from "./SideBarIcon.module.css";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../../Store/SidebarSlice";

function SideBarIcon() {
  const dispatch = useDispatch();

  function showSideBarHandler() {
    dispatch(toggleSideBar());
  }

  return (
    <div className={classes.icon} onClick={showSideBarHandler}>
      <p>&gt;</p>
    </div>
  );
}

export default SideBarIcon;
