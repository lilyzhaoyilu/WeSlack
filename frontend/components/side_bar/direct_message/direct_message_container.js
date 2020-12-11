import { connect } from 'react-redux';
import {fetchUsers} from '../../../actions/user_actions'



import DirectMessage from './direct_message';

const mapStateToProps = (state, ownProps) => {
  
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,

  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessage);

