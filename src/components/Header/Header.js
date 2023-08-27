import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignup, toggleLogin } from "../../Store/AuthenticationSlice";
import { signoutAction } from "../../Store/AuthenticationActions";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function showSignupHandler() {
    dispatch(toggleSignup({ user: null, showSignup: true }));
  }
  function showLoginHandler() {
    dispatch(toggleLogin({ user: null, showLogin: true }));
  }

  function logoutHandler() {
    dispatch(signoutAction());
  }

  return (
    <div className={classes.header}>
      <div className={classes.logo}>LOGO</div>
      <div className={classes.menu}>
        <ul className={classes["menu-ul"]}>
          {isLoggedIn && <li onClick={logoutHandler}>Logout</li>}
          {!isLoggedIn && (
            <>
              <li onClick={showSignupHandler}>SignUp</li>
              <li onClick={showLoginHandler}>Login</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
