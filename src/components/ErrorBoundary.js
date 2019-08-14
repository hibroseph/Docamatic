import React, { Component } from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Report back to sentry
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h5>Oh no! an error occured</h5>
        </div>
      );
    }
  }
}
