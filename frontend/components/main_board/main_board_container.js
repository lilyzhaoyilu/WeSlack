import { connect } from 'react-redux';
import MainBoard from './main_board';
import {fetchUsers} from '../../actions/user_actions';
import {fetchChannels} from '../../actions/channel_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    // users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchChannels: (userId) => dispatch(fetchChannels(userId)),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBoard);
