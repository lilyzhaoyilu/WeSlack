import {
  RECEIVE_CMESSAGES,RECEIVE_CMESSAGE
} from '../actions/cmessage_actions';
import {
  RECEIVE_DMESSAGES, RECEIVE_DMESSAGE
} from '../actions/dmessage_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CMESSAGES:
      return Object.assign({}, action.messages);
    case RECEIVE_CMESSAGE:
      return Object.assign({}, state, action.message);
    case RECEIVE_DMESSAGES:
      return Object.assign({}, action.messages);
    case RECEIVE_DMESSAGE:
      return Object.assign({}, state, action.message);
    default:
      return state;
  }
};