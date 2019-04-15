import React, { Component } from "react";
import _ from "lodash";
import CartTable from "./cartTable";
import { ProgressBar } from "react-bootstrap";

class ShoppingCart extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
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

  render() {
    if (this.props.cart.length == 0) {
      return <h1>The cart is empty</h1>;
    } else {
      const now = 25;
      const progressInstance = (
        <ProgressBar animated now={now} label={`${now}%`} />
      );
      return (
        <div>
          {progressInstance}
          <CartTable
            cart={this.props.cart}
            sortColumn={this.state.sortColumn}
            setPrice={this.handlePriceChange}
            getSubtotal={this.getSubtotal}
            onSort={this.handleSort}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        </div>
      );
    }
  }
}

export default ShoppingCart;
