import { combineReducers } from 'redux';

import users from './users_reducer';
import channels from './channels_reducer';
import cmessages from './cmessages_reducer';
import channelusers from './channelusers_reducer';

const entitiesReducer =  combineReducers({
  users,
  channels,
  cmessages,
  channelusers,
});

export default entitiesReducer;
