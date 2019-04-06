import React from 'react';
import { AuthRoute} from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;