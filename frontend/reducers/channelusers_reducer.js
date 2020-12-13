import {
  REMOVE_CHANNEL_USER,RECEIVE_CHANNEL_USERS
} from '../actions/channeluser_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_USERS:
    return Object.assign({}, action.channelusers);
    default:
      return state;
  }
};