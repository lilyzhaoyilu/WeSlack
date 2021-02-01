import { connect } from 'react-redux';
import MessageFrom from './message_form';
import { withRouter } from "react-router";
import {createCMessage} from '../../../actions/cmessage_actions';
import {createDMessage} from '../../../actions/dmessage_actions';
import {createChannelUser,fetchChannelUsers, deleteChannelUser} from '../../../actions/channeluser_actions';
const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    currentChannel: state.entities.allchannels[ownProps.match.params.channelId],
    currentDM:ownProps.match.params.dmId,
    allchannels: state.entities.allchannels,
    channels: state.entities.channels,
    channelUsers: state.entities.channelusers
}};


const mapDispatchToProps = dispatch => ({
  createCMessage: (cmessage) => dispatch(createCMessage(cmessage)), 
  createDMessage: (message) => dispatch(createDMessage(message)), 
  createChannelUser: (channelId, userId, pending) => dispatch(createChannelUser(channelId, userId, pending)),
});

export default  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageFrom));
