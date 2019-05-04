import React, { Component } from "react";
import firebase from "firebase";
import HistoryTable from "./historyTable";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import { deleteProperty } from "../common/deleteProperty";
import { getProduct } from "../services/fakeProductService";
import "./history.css";
import HistoryEmpty from "../images/history_empty.png";
import HistoryUnavailable from "../images/history_unavailable.png";

class History extends Component {
  state = {
    products: [],
    aisles: [],
    currentPage: 1,
    pageSize: 10,
    sortColumn: { path: "title", order: "asc" }
  };

  handleAddtoCart = product => {
    let modifiedItem = deleteProperty(product, "orderNum");
    modifiedItem = deleteProperty(modifiedItem, "dateOfPurchase");
    modifiedItem = {
      ...modifiedItem,
      numberInStock: getProduct(product._id).numberInStock
    };
    this.props.onAddToCart(modifiedItem);
  };

  handleButton = product => {
    let cart = this.props.cart;
    var p;
    for (p in cart) {
      if (cart[p]._id === product._id) {
        return (
          <button
            onClick={() => this.handleAddtoCart(product)}
            type="button"
            className="btn btn-success"
            disabled
          >
            <i className="fa fa-check fa-fw" />
          </button>
        );
      }
    }

    return (
      <button
        onClick={() => this.handleAddtoCart(product)}
        type="button"
        id="addToCartButton"
      >
        Add to Cart
      </button>
    );
  };

  handlePriceChange = product => {
    const salePrice = product.salePrice;
    const basePrice = product.basePrice;
    if (salePrice === 0) {
      return <span> ${basePrice.toFixed(2)} </span>;
    }
    return <span>${product.currentPrice.toFixed(2)}</span>;
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleAisleSelect = aisle => {
    this.setState({ selectedAisle: aisle, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    var history = this.props.history;

    const { pageSize, currentPage, sortColumn, selectedAisle } = this.state;
    const filtered =
      selectedAisle && selectedAisle._id
        ? history.filter(m => m.genre._id === selectedAisle._id)
        : history;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const products = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: products };
  };

  render() {
    const { length: count } = this.props.history;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (this.props.userLoggedIn === false) {
      return (
        <div>
          <img
            className="center"
            alt="History Unavailable"
            src={HistoryUnavailable}
          />
          <h2 className="limited">
            This feature is only available to registered customers.
          </h2>
          <h4 className="noHistory">
            Create an account or sign in if you have one.
          </h4>
        </div>
      );
    } else {
      if (count === 0)
        return (
          <div>
            <img className="center" alt="History Empty" src={HistoryEmpty} />
            <p className="noPurchase">No Recent Purchases.</p>
          </div>
        );

      const { totalCount, data: products } = this.getPagedData();

      return (
        <div className="row">
          <div className="col">
            <HistoryTable
              products={products}
              sortColumn={sortColumn}
              setPrice={this.handlePriceChange}
              onSort={this.handleSort}
              getButton={this.handleButton}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      );
    }
  }
}

export default History;
