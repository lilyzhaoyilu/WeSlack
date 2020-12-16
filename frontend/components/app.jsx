import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter,
} from 'react-router-dom';



import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NoMatch from './no_match/no_match';
import MainBoardContainer from './main_board/main_board_container';
import SplashContainer from './splash/splash_container';
// import WorkSpaceContainer from './workspace/workspace_container';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/client" component={MainBoardContainer}/>
      <Route path="*"><NoMatch /></Route>
      </Switch>
    </div>
    )
  }
}


export default withRouter(App);
