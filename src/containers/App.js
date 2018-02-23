import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Switch, Route } from 'react-router';
import 'antd/dist/antd.css';

import Register from './Register';
import Login from './Login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
