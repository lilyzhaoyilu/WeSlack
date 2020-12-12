import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  
} from '../actions/session_actions';

const _null = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser.id}
    case LOGOUT_CURRENT_USER:
      return _null;
    default:
      return state;
  }
};

export default sessionReducer;
