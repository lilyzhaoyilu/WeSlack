import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { signup, loginDemo } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup',
  navLink: <Link to="/login" className="nav-link">log in</Link>,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  processDemo: ()=> dispatch(loginDemo())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);