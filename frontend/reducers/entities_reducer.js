import { combineReducers } from 'redux';

import users from './users_reducer';
import channels from './channels_reducer';
import messages from './cmessages_reducer';
import channelusers from './channelusers_reducer';

const entitiesReducer =  combineReducers({
  users,
  channels,
  messages,
  channelusers,
});

export default entitiesReducer;
