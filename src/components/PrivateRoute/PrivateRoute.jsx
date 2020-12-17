import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import WithAuth from '../Hoc/WithAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default WithAuth(PrivateRoute);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
