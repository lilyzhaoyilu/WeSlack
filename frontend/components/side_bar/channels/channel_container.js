import { connect } from 'react-redux';
import Channel from './channel';
import {fetchChannel} from '../../../actions/channel_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
    channels: state.entities.channels
   
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  // fetchchannel : (channelId) => dispatch(ChannelAction.fetchchannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
