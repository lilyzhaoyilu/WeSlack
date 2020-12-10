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

import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import NoMatch from './no_match/no_match'
import MainBoardContainer from './main_board/main_board_container'





const App = () => (
  <div>
   
     
    <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/client" component={MainBoardContainer}/>
    <AuthRoute path="/" component={LoginFormContainer} />
    
    <Route path="*"><NoMatch /></Route>
      
      
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} />
      <Route exact path="/" component={SearchContainer} /> */}
    </Switch>

    
  

  
  </div>
);

export default App;
