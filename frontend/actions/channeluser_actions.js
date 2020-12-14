import * as ChannelUserApiUtil from '../util/channeluser_api_utils';

// export const RECEIVE_CHANNEL_USER = 'RECEIVE_CHANNEL_USER';
export const REMOVE_CHANNEL_USER = 'REMOVE_CHANNEL_USER';
export const RECEIVE_CHANNEL_USERS = 'RECEIVE_CHANNEL_USERS';
// export const CREATE_CHANNEL_USER = 'CREATE_CHANNEL_USER';

const receiveChannelUsers = (channelusers) => ({
  type: RECEIVE_CHANNEL_USERS,
  channelusers
});


// const removeChannelUser = (userId) => ({
//   type: REMOVE_CHANNEL_USER,
//   userId
// });

export const fetchChannelUsers = (channelId, userId) => dispatch => {
  return ChannelUserApiUtil.fetchChannelUsers(channelId, userId)
  .then(cId =>dispatch(receiveChannelUsers(cId)))
}

export const createChannelUser = (channelId, userId) => dispatch => {
  return ChannelUserApiUtil.createChannelUser(channelId, userId)
  .then(userId =>dispatch(receiveChannelUsers(userId)))
}


export const deleteChannelUser = (channelId,userId) => dispatch => {
  return ChannelUserApiUtil.deleteChannelUser(channelId, userId)
  .then(userId =>dispatch(receiveChannelUsers(userId)))
}
