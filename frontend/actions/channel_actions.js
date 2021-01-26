import * as ChannelApiUtil from '../util/channel_api_utils';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const UPDATE_CURRENT_CHANNEL = 'UPDATE_CURRENT_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'


const receiveAllChannels = (allchannels) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    allchannels
  }
}





export const updateCurrentChannel = (currentChannel) => (
  {
    type: UPDATE_CURRENT_CHANNEL,
    currentChannel: currentChannel
  }
)


const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors // it is an array
});

const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
}

const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
}



const removeChannel = (channelId) => {
  return {
    type: REMOVE_CHANNEL,
    channelId
  }
}

//Thunk action creators
export const fetchChannels = (userId) => dispatch => (
  ChannelApiUtil.fetchChannels(userId)
  .then(cs =>dispatch(receiveChannels(cs))), err => (
    dispatch(receiveChannelErrors(err.responseJSON))
    )
);


export const fetchAllChannels = () => dispatch => (
  ChannelApiUtil.fetchAllChannels()
  .then(cs =>dispatch(receiveAllChannels(cs)))
);









export const fetchChannel = (channelId) => dispatch => {
  return ChannelApiUtil.fetchChannel(channelId)
  .then(channel =>dispatch(receiveChannel(channel)), err => (
    dispatch(receiveChannelErrors(err.responseJSON))))
}

export const createChannel = (channel) => dispatch => {
  return ChannelApiUtil.createChannel(channel).then(channel => dispatch(receiveChannel(channel)), err => (
    dispatch(receiveChannelErrors(err.responseJSON))))
}

export const updateChannel = (channel) => dispatch => {
  return ChannelApiUtil.updateChannel(channel).then(channel => dispatch(receiveChannel(channel)), err => (
    dispatch(receiveChannelErrors(err.responseJSON))))
}

export const deleteChannel = (channelID) => dispatch => {
  // debugger;
  return ChannelApiUtil.deleteChannel(channelID).then((channelID) => dispatch(removeChannel(channelID)))
}