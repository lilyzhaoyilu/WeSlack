import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


////////////////////////////////testing

import UserContainer from './user/user_container'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'



const App = () => (
  <div>
    <header>
      <h2>welcome to WeSlack this is the app.jsx page</h2>
      <h3>user container<UserContainer /></h3>
    </header>
      <Route path="/login" component={LoginFormContainer} />
       <Route path="/signup" component={SignupFormContainer} />
      
  

  
  </div>
);

export default App;
