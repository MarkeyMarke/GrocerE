import React, { Component } from "react";
import Products from "./products";
import History from "./history";
import Pagination from "../common/pagination";
import { getHistory } from "../services/fakeHistoryService";
import { paginate } from "../utils/paginate";
import { getAisles } from "../services/fakeAisleService";
import _ from "lodash";
import { deleteProperty } from "./../common/deleteProperty";
import { getProduct, getProducts } from "./../services/fakeProductService";
import CartTable from "./cartTable";
import Table from "../common/table";

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

  handleQuantity = item => {
    const quantity = item["quantity"];
    console.log(item["productName"], "has", quantity, "inside cart");
    return quantity;
  };

  // getSubtotal = product => {
  //   const salePrice = product.salePrice;
  //   const basePrice = product.basePrice;
  //   if (salePrice === 0) {
  //     return <span> ${basePrice.toFixed(2)} </span>;
  //   }
  //   return <span>${product.currentPrice.toFixed(2) * }</span>;
  // };

  handleAfterDelete = product => {
    this.props.onDeleteFromCart(product);
    // let cart = this.props.cart;
    // console.log("cart:", cart);
    // var p;
    // for (p = 0; p < cart; p++) {
    //   if (cart[p]._id === product._id) {
    //     cart.splice(p, 1);
    //     console.log(cart[p]);
    //   }

    // let modifiedItem = deleteProperty(this.props.cart, product);
    // console.log(modifiedItem);
    // modifiedItem = deleteProperty(modifiedItem, "dateOfPurchase");
    // modifiedItem = {
    //   ...modifiedItem,
    //   numberInStock: getProduct(product._id).numberInStock
    // };
    // this.props.onAddToCart(modifiedItem);
  };

  subtractQuantity = product => {
    this.props.subtractQuantity(product);
    this.handleQuantity(product);
  };

  addQuantity = product => {
    this.props.addQuantity(product);
    this.handleQuantity(product);
  };

  handleDelete = product => {
    return (
      <button
        onClick={() => this.handleAfterDelete(product)}
        className="btn btn-outline-danger"
      >
        Delete
      </button>
    );
  };

  adjustQuantity = product => {
    return (
      <div>
        <button
          onClick={() => this.subtractQuantity(product)}
          className="btn btn-outline-danger"
        >
          -
        </button>
        <button
          onClick={() => this.addQuantity(product)}
          className="btn btn-outline-danger"
        >
          +
        </button>
      </div>
    );
  };

  getSubtotal = product => {
    return (
      <span>${(product.currentPrice * product["quantity"]).toFixed(2)}</span>
    );
  };

  render() {
    return (
      <div>
        <CartTable
          cart={this.props.cart}
          sortColumn={this.state.sortColumn}
          setPrice={this.handlePriceChange}
          setQuantity={this.handleQuantity}
          getSubtotal={this.getSubtotal}
          onSort={this.handleSort}
          getButton={this.handleDelete}
          quantityButton={this.adjustQuantity}
        />
      </div>
    );
  }
}

export default ShoppingCart;
