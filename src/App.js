import React, { Component } from 'react';
import { BrowserRouter, Redirect, Switch} from 'react-router-dom';
import { Route, Router } from 'react-router';
import PropTypes from 'prop-types';

import { history } from './helpers/history';
import { userHelper } from './helpers/userHelper';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

import './App.css';


const PrivateRoute = ({ component: Component, redirectTo, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            userHelper.isAuthenticated()
                ? <Component {...props} />
                : <Redirect to={{ pathname: "/login" }} />}
    />
);

const LoginRoute = ({ component: Component, redirectTo, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            userHelper.isAuthenticated()
                ? <Redirect to={{ pathname: redirectTo }} />:
                <Component {...props} />
        }
    />
);

PrivateRoute.propTypes = {
  //auth: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired
}

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <div>
              <Switch>
                  <Route exact path='index.html' />
                  <LoginRoute path='/login' component={Login} redirectTo='/dashboard'/>
                  <PrivateRoute path='/dashboard' component={Dashboard}/>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
