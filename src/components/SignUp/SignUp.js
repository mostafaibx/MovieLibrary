import Modal from "../../UI/Modal";
import classes from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../Store/AuthenticationActions";
import { toggleSignup } from "../../Store/AuthenticationSlice";
import { setError } from "../../Store/ErrorSlice";

function SignUp() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error);

  function sendSignupData(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const pw = event.target.pw.value;
    const pw2 = event.target.pw2.value;
    const username = event.target.username.value;
    dispatch(
      signUpAction({ username: username, email: email, pw: pw, pw2: pw2 })
    );
  }

  function closeHandler() {
    dispatch(toggleSignup({ user: null }));
    dispatch(setError(""));
  }

  return (
    <Modal>
      <div className={classes.signup}>
        <h1 className={classes.title}>Signup</h1>
        {error && <p className={classes.error}>{error}</p>}
        <button className={classes.close} onClick={closeHandler}>
          X
        </button>
        <form onSubmit={sendSignupData}>
          <div className={classes.inputs}>
            <label htmlFor="username">UserName: </label>
            <input id="username" type="text" name="username"></input>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" name="email"></input>
            <label htmlFor="pw">Password: </label>
            <input id="pw" type="password" name="pw"></input>
            <label htmlFor="pw2" name="pw2">
              Password:{" "}
            </label>
            <input id="pw2" type="password"></input>
          </div>
          <button>Sign up</button>
          <button>Reset</button>
        </form>
      </div>
    </Modal>
  );
}

export default SignUp;
