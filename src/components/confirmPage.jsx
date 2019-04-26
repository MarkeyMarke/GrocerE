import React, { Component } from "react";
import "./confirmation.css";

class ConfirmPage extends Component {
  render() {
    return (
      <div id="receipt-container">
        <h2>Purchase complete</h2>
        <p id="order-text">Your order number is:</p>
        <h1 id="order-num">1234567</h1>
        <p id="purchase-text">Date of purchase:</p>
        <h1 id="date">Feb 14, 2019</h1>
        <button
          id="backToShopButton"
          onClick={() => this.props.handlePhaseChange(4)}
          className="btn btn-outline-danger"
        >
          Back to Shop
        </button>
      </div>
    );
  }
}

export default ConfirmPage;
