import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
// import { BrowserRouter } from 'react-router-dom' 

///testing
import{fetchChannels} from './util/channel_api_utils';
import {fetchAllUsers} from './util/user_api_utils';
import {fetchMessages} from './util/cmessage_api_utils';
import {fetchChannelUsers, deleteChannelUser, createChannelUser} from './util/channeluser_api_utils'
import {createMessage} from './util/cmessage_api_utils'


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
  window.fetchChannelUsers = fetchChannelUsers;
  window.createChannelUser = createChannelUser;
  window.deleteChannelUser = deleteChannelUser;
  window.createMessage = createMessage;
 

  ////////////////////////////////




  const root = document.getElementById("root");
  ReactDOM.render(  <Root store={store} />,  root);
});





