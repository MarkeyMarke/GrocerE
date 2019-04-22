import React, { Component } from "react";

class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <h1>This is the checkout page</h1>
        <button
          onClick={() => this.props.handlePhaseChange(3)}
          className="btn btn-outline-danger"
        >
          Confirm
        </button>
        <div />
      </div>
    );
  }
}

export default CheckoutPage;
