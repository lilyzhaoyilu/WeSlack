import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Search from './search';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
   
    channels: Object.values(state.entities.channels),
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = dispatch => ({
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
