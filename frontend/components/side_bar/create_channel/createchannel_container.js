import { connect } from 'react-redux';
import {createChannel, fetchChannels} from '../../../actions/channel_actions'


import CreateChannel from './createchannel';

const mapStateToProps = (state, ownProps) => {
  
  return {
    currentUser: state.session.currentUser,
    users: state.users,   

  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (channel) => dispatch(createChannel(channel)),
  fetchChannels: (userId) => dispatch(fetchChannels(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannel);



