import React, { Component } from "react";

import ErrorComponent from "../ErrorComponent";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: { message: "", stack: "" },
      info: { componentStack: "" },
    };
  }

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch(error, info){
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorComponent error={error} info={info} /> : children;
  }
}

export default ErrorBoundary;
