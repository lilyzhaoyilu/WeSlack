import { connect } from 'react-redux';
import MessageFrom from './message_form';
import { withRouter } from "react-router";
import {createCMessage} from '../../../actions/cmessage_actions';
import {createDMessage} from '../../../actions/dmessage_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    currentChannel: state.entities.channels[ownProps.match.params.channelId],
    currentDM:ownProps.match.params.dmId
}};


const mapDispatchToProps = dispatch => ({
  createCMessage: (cmessage) => dispatch(createCMessage(cmessage)), 
  createDMessage: (message) => dispatch(createDMessage(message)), 
});

export default  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageFrom));
