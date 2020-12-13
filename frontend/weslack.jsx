import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';


///testing
import{fetchChannels} from './util/channel_api_utils'
import {fetchAllUsers} from './util/user_api_utils'
import {fetchMessages} from './util/cmessage_api_utils'

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
  window.fetchChannels = fetchChannels;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store =store;
  window.fetchAllUsers = fetchAllUsers;
  window.fetchMessages = fetchMessages;
 

  ////////////////////////////////




  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});





