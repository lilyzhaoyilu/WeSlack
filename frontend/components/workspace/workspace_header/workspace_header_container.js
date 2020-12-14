import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';

import WorkSpaceHeader from './workspace_header';
import {createChannelUser,fetchChannelUsers, deleteChannelUser} from '../../../actions/channeluser_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  channels: state.entities.channels,
  currentChannel: state.entities.channels[ownProps.match.params.channelId],
  currentUser: state.session.currentUser,
  currentChannelId: ownProps.match.params.channelId,
  
  };
};

const mapDispatchToProps = dispatch => ({
  deleteChannelUser: (channelId, userId) => dispatch(deleteChannelUser(channelId, userId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkSpaceHeader));
