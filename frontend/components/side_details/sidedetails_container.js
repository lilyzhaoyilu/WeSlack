import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {patchChannelUser, deleteChannelUser} from '../../actions/channeluser_actions'
import SideDetail from './sidedetails';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
    channelusers: state.entities.channelusers,
    currentChannel: state.entities.allchannels[ownProps.match.params.channelId],
  };
};

const mapDispatchToProps = dispatch => ({
  patchChannelUser: (channelId, userId, pending) => dispatch(patchChannelUser(channelId, userId, pending)),
  deleteChannelUser: (channelId, userId) => dispatch(deleteChannelUser(channelId, userId)),

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDetail));
