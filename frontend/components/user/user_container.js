import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { logout } from '../../actions/session_actions';
import User from './user.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
