import { connect } from 'react-redux';
import Channel from './channel';
import {fetchChannel} from '../../../actions/channel_actions'
import {receiveCurrentChannel} from '../../../actions/session_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
    channels: state.entities.channels
   
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
