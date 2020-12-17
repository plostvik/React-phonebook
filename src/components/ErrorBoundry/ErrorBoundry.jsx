import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <h2>Oops, something went wrong. Try again!</h2>;
    }
    return this.props.children;
  }
}
