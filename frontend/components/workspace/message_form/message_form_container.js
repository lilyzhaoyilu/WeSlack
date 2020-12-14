import { connect } from 'react-redux';
import MessageFrom from './message_form';
import { withRouter } from "react-router";
import {createCMessage} from '../../../actions/cmessage_actions'
const mapStateToProps = (state, ownProps) => {
 
  return {
    currentUser: state.session.currentUser,
    currentChannel: state.session.currentChannel,
}};


const mapDispatchToProps = dispatch => ({
  createCMessage: (cmessage) => dispatch(createCMessage(cmessage))
});

export default  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageFrom));
