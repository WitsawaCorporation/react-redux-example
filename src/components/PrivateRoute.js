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

  componentWillMount() {
    this.props.getUserMe();
  }

  render() {
    const {
      component: MyComponent,
      roles,
      user,
      ...rest
    } = this.props;
    const validRole = roles.include(user.role);
    if (isAuth() && validRole) {
      return (
        <Route
          {...rest}
          render={props => <MyComponent {...props} />}
        />
      );
    }
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )}
      />
    );
  }
}

PrivateRoute.defaultProps = {
  roles: ['buyer'],
};

PrivateRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string),
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
  getUserMe: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  // isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  // isAuth: state.session.isAuth,
  user: state.session.user,
});
const mapDispatchToProps = dispatch => ({
  getUserMe: () => dispatch(session.actions.getUserMe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
