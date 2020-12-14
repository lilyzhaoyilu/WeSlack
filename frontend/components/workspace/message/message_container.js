import { connect } from 'react-redux';
import { withRouter } from "react-router";

import {fetchCMessages} from '../../../actions/cmessage_actions';

import {createChannelUser,fetchChannelUsers, deleteChannelUser} from '../../../actions/channeluser_actions';
import {fetchDMessages} from '../../../actions/dmessage_actions'
import Message from './message';

const mapStateToProps = (state, ownProps) => {
  
  return {
  currentUser: state.session.currentUser,
  user: state.entities.users,
  currentChannel: state.entities.channels[ownProps.match.params.channelId],
  // currentChannelId: ownProps.match.params.channelId,
  // currentDMId: ownProps.match.params.dmId,
  messages: state.entities.messages,
  // channelusers: state.entities.channelusers
    
}};


const mapDispatchToProps = dispatch => ({
  createChannelUser: (channelId, userId) => dispatch(createChannelUser(channelId, userId)),
  deleteChannelUser: (channelId, userId) => dispatch(deleteChannelUser(channelId, userId)),
  fetchCMessages: (channelId) => dispatch(fetchCMessages(channelId)),
  fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)),
  fetchDMessages: (currentUserId,otherPersonId) => dispatch(fetchDMessages(currentUserId,otherPersonId)),
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Message));
