import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Search from './search';
import {fetchAllChannels} from '../../../actions/channel_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    allchannelsya: state.entities.allchannels,
    allchannels: Object.values(state.entities.allchannels),
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllChannels: () => dispatch(fetchAllChannels())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
