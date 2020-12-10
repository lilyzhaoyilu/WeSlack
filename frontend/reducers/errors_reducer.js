import { combineReducers } from 'redux';

import sessionReducer from './session_errors_reducer';
import channelReducer from './channel_errors_reducer';

const errorsReducer =  combineReducers({
  session: sessionReducer,
  channels: channelReducer
});

export default errorsReducer;