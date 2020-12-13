import { connect } from 'react-redux';
import WorkSpace from './workspace';
import {fetchCMessages} from '../../actions/cmessage_actions'
import { withRouter } from "react-router";
const mapStateToProps = (state, ownProps) => {
 
  return {
    currentUser: state.session.currentUser,
    user: state.entities.users,
    currentChannel: state.entities.channels[ownProps.match.params.channelId],
    currentChannelId: ownProps.match.params.channelId,
    currentDMId: ownProps.match.params.dmId,
    cmessages: state.entities.cmessages
    
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCMessages: (channelId) => dispatch(fetchCMessages(channelId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkSpace));
