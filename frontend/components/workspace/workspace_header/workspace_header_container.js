import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';

import WorkSpaceHeader from './workspace_header';
import {createChannelUser,fetchChannelUsers, deleteChannelUser} from '../../../actions/channeluser_actions';
import{fetchAllChannels, deleteChannel} from '../../../actions/channel_actions'

const mapStateToProps = (state, ownProps) => {
  return {
  channels: state.entities.channels,
  users: state.entities.users,
  currentChannel: state.entities.allchannels[ownProps.match.params.channelId],
  currentDM: ownProps.match.params.dmId,
  currentUser: state.session.currentUser,
  channelusers: state.entities.channelusers,
  allchannels: state.entities.allchannels,
  
  };
};

const mapDispatchToProps = dispatch => ({
  deleteChannelUser: (channelId, userId) => dispatch(deleteChannelUser(channelId, userId)),
  createChannelUser: (channelId, userId) => dispatch(createChannelUser(channelId, userId)),
  fetchCMessages: (channelId) => dispatch(fetchCMessages(channelId)),
  fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)),
  fetchAllChannels: () => dispatch((fetchAllChannels())),
  deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),

  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkSpaceHeader));
