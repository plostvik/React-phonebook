import React from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../redux/auth/authSelectors';
import PropTypes from 'prop-types';

const withAuth = WrappedComponent => {
  function WithAuth(props) {
    return <WrappedComponent {...props} />;
  }

  const mapStateToProps = state => ({
    isAuth: getToken(state),
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;

withAuth.propTypes = {
  WrappedComponent: PropTypes.elementType.isRequired,
};
