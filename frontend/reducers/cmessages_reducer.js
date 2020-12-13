import {
  RECEIVE_CMESSAGES,
} from '../actions/cmessage_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CMESSAGES:
      
      return Object.assign({}, action.cmessages);
    default:
      return state;
  }
};