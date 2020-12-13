import { combineReducers } from 'redux';

import users from './users_reducer';
import channels from './channels_reducer';
import cmessages from './cmessages_reducer';

const entitiesReducer =  combineReducers({
  users,
  channels,
  cmessages,
});

export default entitiesReducer;
