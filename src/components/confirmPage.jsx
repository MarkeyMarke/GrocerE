import React, { Component } from "react";
import "./confirmation.css";

class ConfirmPage extends Component {
  render() {
    return (
      <div id="receipt-container">
        <h2 id="heading-text">Purchase complete</h2>
        <p id="order-text">Your order number is:</p>
        <h1 id="order-num">{this.props.orderNum}</h1>
        <p id="purchase-text">Date of purchase:</p>
        <h1 id="date">{this.props.dateOfPurchase}</h1>
        <p id="total-text">Total Price:</p>
        <h1 id="total">${this.props.total.toFixed(2)}</h1>
        <button
          id="backToShopButton"
          onClick={() => this.props.handlePhaseChange(4)}
          className="btn btn-danger btn-lg"
          type="button"
        >
          Back to Shop
        </button>
      </div>
    );
  }
}

export default ConfirmPage;
