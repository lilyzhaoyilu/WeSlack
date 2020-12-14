import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {UPDATE_CURRENT_CHANNEL} from '../actions/channel_actions'

const _null = Object.freeze({
  currentUser: null, currentChannel: null,
});

const sessionReducer = (state = _null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state,{currentUser: action.currentUser.id});
    case UPDATE_CURRENT_CHANNEL:
      
      return Object.assign({}, state,{currentChannel: action.currentChannel});
    case LOGOUT_CURRENT_USER:
      return _null;
    default:
      return state;
  }
};

export default sessionReducer;
