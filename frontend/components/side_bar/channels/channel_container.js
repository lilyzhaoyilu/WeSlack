import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Channel from './channel';
import {fetchChannel, updateCurrentChannel} from '../../../actions/channel_actions';
import {fetchCMessages} from '../../../actions/cmessage_actions';
import {fetchChannelUsers} from '../../../actions/channeluser_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
    channels: state.entities.channels,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  fetchCMessages: (channelId) => dispatch(fetchCMessages(channelId)),
  fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)),
  updateCurrentChannel: (currentChannel) => dispatch(updateCurrentChannel(currentChannel))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel));
