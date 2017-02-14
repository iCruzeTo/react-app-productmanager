import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute, withRouter } from 'react-router'
import Login from './containers/login/Login';
import Welcome from './containers/home/Welcome';
import NotFoundPage from './components/NotFoundPage';

export default class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Login}>
            <IndexRoute to="/login"/>
        </Route>
        <Route path="/login/welcome/" component={withRouter(Welcome)}/>
        <Route path="*" component={NotFoundPage}/>
      </Router>
    );
  }
}
