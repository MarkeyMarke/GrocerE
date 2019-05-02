import React, { Component } from "react";
import { Redirect } from "react-router";
import CartTable from "./cartTable";
import CheckoutPage from "./checkoutPage";
import ConfirmPage from "./confirmPage";
import { ProgressBar } from "react-bootstrap";
import CartEmpty from "../images/cart_empty.png";
import "./shoppingCart.css";
import { generateDateString } from './../common/generateDateString';

class ShoppingCart extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
    phase: 1,
    products: this.props.product,
    sortColumn: { path: "title", order: "asc" },
    orderNum:"",
    dateOfPurchase:"",
    total: 0
  };

  calcTotal = () => {
    var cartTemp = this.props.cart;
    var finalPrice = 0;
    for (var p = 0; p < cartTemp.length; p++) {
      finalPrice += cartTemp[p]["currentPrice"] * cartTemp[p]["quantity"];
    }
    console.log("Checkout subtotal: " + finalPrice);
    console.log("Checkout total: " + finalPrice * 1.0725);
    this.setState({total: finalPrice*1.0725});
    return (finalPrice * 1.0725).toFixed(2);
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

  saveReceiptInfo = (day, month, year, order) => {
    const date = generateDateString(day,month,year);
    this.setState({dateOfPurchase: date});
    this.setState({orderNum: order});
  }

  render() {
    if (this.props.cart.length === 0 && this.state.phase === 1) {
      return (
        <div>
          <img className="cartIcon" alt="Cart Empty" src={CartEmpty} />
          <h1 className="emptyCart">
            Hmm...your Cart is looking pretty empty.
          </h1>
          <h4 className="message">Add items from Aisles to get started.</h4>
        </div>
      );
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
          <p id="phase1-text">
            <b>Step 1 of 3 - Cart</b>
          </p>
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
            clearCart={this.props.clearCart}
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
          <p id="phase2-text">
            <b>Step 2 of 3 - Checkout</b>
          </p>
          {progressInstance} <br />
          <CheckoutPage
            history={this.props.history}
            appendToHistory={this.props.appendToHistory}
            cart={this.props.cart}
            handlePhaseChange={this.handlePhaseChange}
            clearCart={this.props.clearCart}
            total={this.calcTotal}
            saveReceiptInfo = {this.saveReceiptInfo}
          />
        </div>
      );
    } else if (this.state.phase === 3) {
      console.log("phase3");
      const now = 100;
      const progressInstance = (
        <ProgressBar
          striped
          variant="success"
          animated
          now={now}
          label={`${now}%`}
        />
      );
      return (
        <div>
          <p id="phase3-text">
            <b>Complete!</b>
          </p>
          {progressInstance}
          <ConfirmPage 
            handlePhaseChange={this.handlePhaseChange} 
            orderNum = {this.state.orderNum}
            dateOfPurchase = {this.state.dateOfPurchase}
            total={this.state.total}
          />
        </div>
      );
    } else if (this.state.phase === 4) {
      this.props.clearCart();
      return <Redirect to="/aisles" />;
    }
  }
}

export default ShoppingCart;
