import { connect } from 'react-redux';
import {createChannel} from '../../../actions/channel_actions'


import CreateChannel from './createchannel';

const mapStateToProps = (state, ownProps) => {
  
  return {
    currentUser: state.session.currentUser,
    users: state.users,   

  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (channel) => dispatch(createChannel(channel)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannel);



