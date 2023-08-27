import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSignup: false,
  showLogin: false,
  isLoggedIn: false,
  displayName: "",
  user: null,
};

const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    toggleSignup(state, action) {
      const user = action.payload.user;
      state.user = user;
      if (user) {
        state.isLoggedIn = true;
        state.showSignup = false;
      } else {
        state.isLoggedIn = false;
        state.showSignup = action.payload.showSignup;
      }
    },
    toggleLogin(state, action) {
      // update the states conditionally based on user var
      const user = action.payload.user;
      state.username = user;
      console.log(user);
      if (user) {
        state.showLogin = false;
        state.isLoggedIn = true;
      } else {
        state.showLogin = action.payload.showLogin;
        state.isLoggedIn = false;
      }
    },
    userDetails(state, action) {
      state.displayName = action.payload;
    },
  },
});

export const {
  toggleSignup,
  toggleLogin,
  signup,
  login,
  loginState,
  userDetails,
} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
