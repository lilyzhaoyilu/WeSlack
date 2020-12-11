import { connect } from 'react-redux';
import SideBar from './side_bar';
import {fetchChannels} from '../../actions/channel_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
    channels: state.entities.channels
   
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannels: (userId) => dispatch(fetchChannels(userId)),
  
  // fetchchannel : (channelId) => dispatch(ChannelAction.fetchchannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
