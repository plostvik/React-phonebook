import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import WithAuth from '../Hoc/WithAuth';

const PublicRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth && routeProps.restricted ? (
        <Redirect to="/phonebook" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default WithAuth(PublicRoute);

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
