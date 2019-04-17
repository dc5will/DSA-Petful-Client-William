import React from "react";
import ApiService from "../../services/ApiService";

class ResetRoute extends React.Component {

  componentDidMount() {
    ApiService.resetQueues();
  }

  render() {
    return null;
  }
}

export default ResetRoute;