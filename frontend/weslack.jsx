import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';


///testing
import {signup, check, login} from "./util/session_api_util"


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  ////////////////////////////////TODO:testing and delete
  window.signup = signup;
  window.check = check;
  window.login = login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ////////////////////////////////




  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});