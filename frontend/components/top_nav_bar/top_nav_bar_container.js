import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import TopNavBar from './top_nav_bar';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
