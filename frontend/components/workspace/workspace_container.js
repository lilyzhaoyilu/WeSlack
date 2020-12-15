import { connect } from 'react-redux';
import WorkSpace from './workspace';
import { withRouter } from "react-router";

import {fetchCMessages} from '../../actions/cmessage_actions';
import {createChannelUser,fetchChannelUsers, deleteChannelUser} from '../../actions/channeluser_actions';


const mapStateToProps = (state, ownProps) => {
 
  return {
    currentUser: state.session.currentUser,
    user: state.entities.users,
    currentChannel: state.entities.channels[ownProps.match.params.channelId],
    currentChannelId: ownProps.match.params.channelId,
    currentDMId: ownProps.match.params.dmId,
    messages: state.entities.messages,
    channelusers: state.entities.channelusers
    
  };
};

const mapDispatchToProps = dispatch => ({
  // createChannelUser: (channelId, userId) => dispatch(createChannelUser(channelId, userId)),
  // deleteChannelUser: (channelId, userId) => dispatch(deleteChannelUser(channelId, userId)),
  // fetchCMessages: (channelId) => dispatch(fetchCMessages(channelId)),
  // fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)),
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkSpace));
