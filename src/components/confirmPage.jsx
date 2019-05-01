import React, { Component } from "react";
import "./confirmation.css";

class ConfirmPage extends Component {
  render() {
    return (
      <div id="receipt-container">
        <h2 className="style-text">Purchase complete</h2>
        <p className="style-text">Your order number is:</p>
        <h1 className="center">{this.props.orderNum}</h1>
        <p className="style-text">Date of purchase:</p>
        <h1 className="center">{this.props.dateOfPurchase}</h1>
        <p className="style-text">Total Cost:</p>
        <h1 className="center">{this.props.dateOfPurchase}</h1>
        
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
