import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';

import WorkSpaceHeader from './workspace_header';
import {createChannelUser,fetchChannelUsers, deleteChannelUser} from '../../../actions/channeluser_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  channels: state.entities.channels,
  users: state.entities.users,
  currentChannel: state.entities.channels[ownProps.match.params.channelId],
  currentDM: ownProps.match.params.dmId,
  currentUser: state.session.currentUser,
  channelusers: state.entities.channelusers
  // currentChannelId: ownProps.match.params.channelId,
  
  };
};

const mapDispatchToProps = dispatch => ({
  deleteChannelUser: (channelId, userId) => dispatch(deleteChannelUser(channelId, userId)),
  createChannelUser: (channelId, userId) => dispatch(createChannelUser(channelId, userId)),
  fetchCMessages: (channelId) => dispatch(fetchCMessages(channelId)),
  fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)),
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkSpaceHeader));
