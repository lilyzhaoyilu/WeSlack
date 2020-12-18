import { RECEIVE_ALL_CHANNELS,RECEIVE_CHANNEL,REMOVE_CHANNEL, RECEIVE_CHANNELS } from '../actions/channel_actions';


const allChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return Object.assign({}, state, action.allchannels);
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, {[action.channel.id]:action.channel});
    default:
      return state;
  }
};

export default allChannelsReducer;