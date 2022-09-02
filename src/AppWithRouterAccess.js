import Navbar from "./component/Navbar";
import Home from "./component/home/Home";
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Createpost from "./component/post/Createpost";
import Post from "./component/post/Post"
import Updatepost from "./component/post/Updatepost";
import {Box} from '@material-ui/core'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import Login from './component/account/Login.js';

const oktaAuth = new OktaAuth(oktaAuthConfig);


function AppWithRouterAccess() {
    const history = useHistory();

    const customAuthHandler = () => {
      history.push('/login');
    };
  
    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
      history.replace(toRelativeUrl(originalUri, window.location.origin));
    };
  
  return (
    <Security
    oktaAuth={oktaAuth}
    onAuthRequired={customAuthHandler}
    restoreOriginalUri={restoreOriginalUri}
  >
      <SecureRoute path='/' component={Navbar}/> 
      <Box>
      <Switch>
      <Route exact path={"/"} component={Home}></Route>
      <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
      <Route path='/login/callback' component={LoginCallback} />
      <Route exact path={"/create"} component={Createpost}></Route>
      <Route exact path={"/details/:id"} component={Post}></Route>
      <Route exact path={"/update/:id"} component={Updatepost}></Route>
      </Switch>
      
</Box>
</Security>
    
    
  );
}

export default AppWithRouterAccess;
