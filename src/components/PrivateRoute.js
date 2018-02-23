import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { session } from '../redux/modules';

const isAuth = () => {
  const token = localStorage.getItem('accessToken');
  return !!token;
};

class PrivateRoute extends Component {
  state = {};
  // componentWillMount() {
  //   this.props.getUser();
  // }

  render() {
    const { component: MyComponent, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          isAuth() ? (
            <MyComponent {...props} />
          ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        )}
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
  // getUser: PropTypes.func.isRequired,
  // isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.session.isAuth,
});
const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(session.actions.getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
