import { connect } from 'react-redux';
import MessageFrom from './message_form';
import { withRouter } from "react-router";
import {createCMessage} from '../../../actions/cmessage_actions';
import {fetchCMessages} from '../../../actions/cmessage_actions';
const mapStateToProps = (state, ownProps) => {
  // console.log("messageform", ownProps)
  return {
    currentUser: state.session.currentUser,
    currentChannel: ownProps.match.params.channelId
}};


const mapDispatchToProps = dispatch => ({
  createCMessage: (cmessage) => dispatch(createCMessage(cmessage)), 
  fetchCMessages: (channelId) => dispatch(fetchCMessages(channelId)),
});

export default  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageFrom));
