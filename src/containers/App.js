import React from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
} from 'react-router';
import 'antd/dist/antd.css';

import PrivateRoute from '../components/PrivateRoute';
import Register from './Register';
import Login from './Login';

const Home = () => <div>Home</div>;
const Admin = () => <div>Admin</div>;

const ConnectedSwitch = connect(state => ({
  location: state.location,
}))(Switch);
class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ConnectedSwitch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute roles={['seller']} exact path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </ConnectedSwitch>
    );
  }
}

const App = connect(state => ({
  location: state.location,
}))(AppContainer);

export default App;
