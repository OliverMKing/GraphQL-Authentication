import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import query from "../queries/CurrentUser";

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.currentUser && !nextProps.data.loading) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(query)(RequireAuth);
};
