import React, { Component } from "react";
import { Redirect } from "react-router";
import CartTable from "./cartTable";
import CheckoutPage from "./checkoutPage";
import ConfirmPage from "./confirmPage";
import { ProgressBar } from "react-bootstrap";

class ShoppingCart extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
    phase: 1,
    products: this.props.product,
    sortColumn: { path: "title", order: "asc" }
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handlePriceChange = product => {
    const salePrice = product.salePrice;
    const basePrice = product.basePrice;
    if (salePrice === 0) {
      return <span> ${basePrice.toFixed(2)} </span>;
    }
    return <span>${product.currentPrice.toFixed(2)}</span>;
  };

  getSubtotal = product => {
    return (
      <span>${(product.currentPrice * product["quantity"]).toFixed(2)}</span>
    );
  };

  handlePhaseChange = phaseNumber => {
    this.setState({ phase: phaseNumber });
    console.log(phaseNumber);
  };

  render() {
    if (this.props.cart.length === 0) {
      return <h1>The cart is empty</h1>;
    } else if (this.state.phase === 1) {
      const now = 33;
      const progressInstance = (
        <ProgressBar
          striped
          variant="danger"
          animated
          now={now}
          label={`${now}%`}
        />
      );
      return (
        <div>
          {progressInstance}
          <br />
          <CartTable
            cart={this.props.cart}
            sortColumn={this.state.sortColumn}
            setPrice={this.handlePriceChange}
            getSubtotal={this.getSubtotal}
            onSort={this.handleSort}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            handlePhaseChange={this.handlePhaseChange}
          />
        </div>
      );
    } else if (this.state.phase === 2) {
      console.log("phase2");
      const now = 66;
      const progressInstance = (
        <ProgressBar
          striped
          variant="danger"
          animated
          now={now}
          label={`${now}%`}
        />
      );
      return (
        <div>
          {progressInstance}
          <CheckoutPage
            history={this.props.history}
            appendToHistory={this.props.appendToHistory}
            cart={this.props.cart}
            handlePhaseChange={this.handlePhaseChange}
            clearCart={this.props.clearCart}
          />
        </div>
      );
    } else if (this.state.phase === 3) {
      console.log("phase3");
      const now = 100;
      const progressInstance = (
        <ProgressBar
          striped
          variant="danger"
          animated
          now={now}
          label={`${now}%`}
        />
      );
      return (
        <div>
          {progressInstance}
          <ConfirmPage handlePhaseChange={this.handlePhaseChange} />
        </div>
      );
    } else if (this.state.phase === 4) {
      this.props.clearCart();
      return <Redirect to="/aisles" />;
    }
  }
}

export default ShoppingCart;
