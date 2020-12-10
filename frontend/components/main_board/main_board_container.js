import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import MainBoard from './main_board';

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
)(MainBoard);
