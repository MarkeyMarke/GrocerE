import React, { Component } from "react";
import { Link } from "react-router-dom";

class ConfirmPage extends Component {
  render() {
    return (
      <div>
        <h1>This is the confirmation page</h1>
        <button
          onClick={() => this.props.handlePhaseChange(1)}
          className="btn btn-outline-danger"
        >
          Finish
        </button>
        <div />
      </div>
    );
  }
}

export default ConfirmPage;
