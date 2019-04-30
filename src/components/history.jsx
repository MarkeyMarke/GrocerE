import React, { Component } from "react";
import HistoryTable from "./historyTable";
import Pagination from "../common/pagination";
import { getHistory } from "../services/fakeHistoryService";
import { paginate } from "../utils/paginate";
import { getAisles } from "../services/fakeAisleService";
import _ from "lodash";
import { deleteProperty } from "./../common/deleteProperty";
import { getProduct } from "./../services/fakeProductService";
import "./history.css";
import firebase from "firebase";
import { getUID } from "../firebase/firebaseAuth.js";

class History extends Component {
  state = {
    aisles: [],
    currentPage: 1,
    pageSize: 4,
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
    if (count === 0) return <p>No Recent Purchases.</p>;

    const { totalCount, data: history } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          <HistoryTable
            products={this.props.history}
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

export default History;
