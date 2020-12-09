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



const App = () => (
  <div>
    <header>
    <Link to="/" className="header-link">
        {/* <img src='../../app/assets/images/slack.svg' alt=""/> */}
        <h1>WeSlack and its logo</h1>
      </Link>
      
    </header>
     
       <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      
      <h3>Welcome to WeSlack<UserContainer /></h3>
      
      <Route path="*"><NoMatch /></Route>
      
      
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} />
      <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
  

  
  </div>
);

export default App;
