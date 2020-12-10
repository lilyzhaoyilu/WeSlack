import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import UserContainer from './user/user_container'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import NoMatch from './no_match/no_match'
// import logo from '../../../app/assets/images/slack.svg';




const App = () => (
  <div>
    <header>
    <Link to="/#" className="header-to-main" style={{ textDecoration: 'none' }}>
      <div className="header-and-name">
        <img src={window.images.logo} width="100" height="100"></img>
        <h1> WeSlack</h1>
      </div>
    </Link>
      
    </header>
     
    <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    
    <Route exact path='/'><UserContainer /></Route>
    
    <Route path="*"><NoMatch /></Route>
      
      
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} />
      <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
  

  
  </div>
);

export default App;
