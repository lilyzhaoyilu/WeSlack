import { connect } from 'react-redux';

import { withRouter } from "react-router";
import MessageDetail from './message_detail';

const mapStateToProps = (state, ownProps) => {

  return {
    // currentUser: state.session.currentUser,
    // currentChannel: state.entities.channels[ownProps.match.params.channelId],
    // currentDM:ownProps.match.params.dmId,
    channels: state.entities.channels,
    users: state.entities.users,
}};


const mapDispatchToProps = dispatch => ({
  // createCMessage: (cmessage) => dispatch(createCMessage(cmessage)), 
  // createDMessage: (message) => dispatch(createDMessage(message)), 
});

export default  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDetail));
