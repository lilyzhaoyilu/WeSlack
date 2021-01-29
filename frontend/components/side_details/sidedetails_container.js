import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

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
  

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDetail));
