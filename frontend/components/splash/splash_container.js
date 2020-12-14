import { connect } from 'react-redux';

import {loginDemo } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users
      
  };
};

const mapDispatchToProps = dispatch => ({
  
  processDemo: ()=> dispatch(loginDemo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
