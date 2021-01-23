import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, loginDemo, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup" className="nav-link">sign up</Link>,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    processDemo: ()=> dispatch(loginDemo()),
    clearSessionErrors: ()=> dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
