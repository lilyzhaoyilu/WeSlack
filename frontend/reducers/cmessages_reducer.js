import {
  RECEIVE_CMESSAGES,RECEIVE_CMESSAGE
} from '../actions/cmessage_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CMESSAGES:
      
      return Object.assign({}, action.cmessages);
    case RECEIVE_CMESSAGE:
      return Object.assign({}, state, action.cmessage);
    default:
      return state;
  }
};