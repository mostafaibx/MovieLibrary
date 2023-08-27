import React from "react";
import ReactDOM from "react-dom"; // Import the main ReactDOM package
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "./Store/Store";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqO7v7g3zevqlz3RTcv95z99VGoCR9c_M",
  authDomain: "movielibrary-48998.firebaseapp.com",
  projectId: "movielibrary-48998",
  storageBucket: "movielibrary-48998.appspot.com",
  messagingSenderId: "300908058027",
  appId: "1:300908058027:web:622f4487f2e2170235aeee",
  measurementId: "G-SDJN10XDC5",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = document.getElementById("root"); // Get the root element directly
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root // Use the root element here
);

reportWebVitals();
