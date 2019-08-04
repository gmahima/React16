import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return <h2>oh no! Something's wrong!!!</h2>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
