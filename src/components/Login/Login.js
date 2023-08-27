import Modal from "../../UI/Modal";
import classes from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../Store/AuthenticationActions";
import { toggleLogin } from "../../Store/AuthenticationSlice";
import { setError } from "../../Store/ErrorSlice";

function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error);

  async function loginHandler(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const pw = event.target.pw.value;

    dispatch(LoginAction({ email: email, pw: pw }));
  }

  function closeHandler() {
    dispatch(toggleLogin({ user: null }));
    dispatch(setError(""));
  }

  return (
    <Modal>
      <div className={classes.login}>
        <h1>Login</h1>
        {error && <p className={classes.error}>{error}</p>}
        <button className={classes.close} onClick={closeHandler}>
          X
        </button>
        <form onSubmit={loginHandler}>
          <div className={classes.inputs}>
            <label htmlFor="email">Email: </label>
            <input id="email" name="email"></input>
            <label htmlFor="pw">Password: </label>
            <input id="pw" name="pw"></input>
          </div>
          <button>Login</button>
          <button>Create New User</button>
        </form>
      </div>
    </Modal>
  );
}

export default Login;
