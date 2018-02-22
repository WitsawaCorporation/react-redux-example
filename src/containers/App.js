import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    )
  }
}