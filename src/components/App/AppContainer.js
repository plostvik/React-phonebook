import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getMessage,
  getLoading,
} from '../../redux/phonebook/phonebookSelectors.js';
import { getCurrentUser } from '../../redux/auth/authOperations';
import App from './App';

class AppContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  };

  static defaultProps = {
    loading: false,
  };

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  message: getMessage(state),
});

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
