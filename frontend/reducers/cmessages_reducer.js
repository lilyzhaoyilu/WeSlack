import {
  RECEIVE_CMESSAGES,RECEIVE_CMESSAGE
} from '../actions/cmessage_actions';
import {
  RECEIVE_DMESSAGES, RECEIVE_DMESSAGE
} from '../actions/dmessage_actions';
import {
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
export default (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CMESSAGES:
      return Object.assign({}, action.messages);
    case RECEIVE_CMESSAGE:
      return Object.assign({}, state,{[action.message.id]: action.message});
    case RECEIVE_DMESSAGES:
      return Object.assign({}, action.messages);
    case RECEIVE_DMESSAGE:
      return Object.assign({}, state,{[action.message.id]: action.message});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};