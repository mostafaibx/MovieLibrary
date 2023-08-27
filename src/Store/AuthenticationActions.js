import { toggleLogin, toggleSignup, userDetails } from "./AuthenticationSlice";
import { setError } from "./ErrorSlice";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const signUpAction = (signupCred) => {
  return async function (dispatch) {
    //validation of inputs
    if (signupCred.username.trim().length === 0) {
      dispatch(setError("Please Enter a Username"));
      return;
    }
    if (signupCred.email.trim().length === 0) {
      dispatch(setError("Please Enter your Email"));
      return;
    }
    if (signupCred.pw !== signupCred.pw2) {
      dispatch(setError("The repeated password doesn't match"));
      return;
    }
    if (signupCred.pw.trim().length === 0) {
      dispatch(setError("Please Enter a Password"));
      return;
    }

    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupCred.email,
        signupCred.pw
      );
      const user = userCredential.user.email;
      await updateProfile(auth.currentUser, {
        displayName: signupCred.username,
      });
      dispatch(toggleSignup({ user }));
      dispatch(getUserData());
    } catch (error) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/missing-email":
          dispatch(setError("Please Enter Your Email."));
        case "auth/email-already-in-use":
          dispatch(setError("This Email is Already in Use."));
      }
    }
  };
};

//Validating the input values
// passing them to firebase & wait for the response
//handle errors if any by dispatching the msg to redux state
// pass the response in user var to reducer to handle the loginCard showing state
export const LoginAction = (loginCred) => {
  return async function (dispatch) {
    //validation of inputs
    if (loginCred.email.trim().length === 0) {
      dispatch(setError("Please Enter your Email."));
      return;
    }
    if (loginCred.pw.trim().length === 0) {
      dispatch(setError("Please Enter Your Password."));
      return;
    }
    const auth = getAuth();

    try {
      const loginCredin = await signInWithEmailAndPassword(
        auth,
        loginCred.email,
        loginCred.pw
      );
      const user = loginCredin.user.uid;
      dispatch(toggleLogin({ user }));
    } catch (error) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/user-not-found":
          dispatch(setError("Your Email is Invalid."));
        case "auth/wrong-password":
          dispatch(setError("Your Password is Incorrect."));
      }
    }
  };
};

//call signout from firebase
//check if user info is not available then dispatch to reducer to update the states
export const signoutAction = () => {
  return async function (dispatch) {
    const auth = getAuth();
    signOut(auth);
    const user = auth.currentUser;
    if (!user) {
      dispatch(toggleLogin({ user: user, showLogin: false }));
    }
  };
};

export const getUserData = () => {
  return async function (dispatch) {
    const auth = getAuth();
    const username = auth.currentUser.displayName;
    if (username !== null) {
      const displayName = username;
      dispatch(userDetails(displayName));
    }
  };
};
