import {
  REMOVE_CHANNEL_USER,RECEIVE_CHANNEL_USERS
} from '../actions/channeluser_actions';

import {
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_USERS:
    return Object.assign({}, action.channelusers);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};