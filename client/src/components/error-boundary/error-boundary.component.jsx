import React from 'react';
import ErrorPage from '../../pages/error/error.component'

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (process.env.NODE_ENV === 'development') {
      console.log(error);
    }
  }

  render() {
    return this.state.hasError ? <ErrorPage /> : this.props.children;
  }
}

export default ErrorBoundary;
