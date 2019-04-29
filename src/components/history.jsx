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
class History extends Component {
  state = {
    products: [],
    aisles: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const aisles = [{ _id: "", name: "All Aisles" }, ...getAisles()];
    var products = this.props.history;
    products.forEach(product => {
      if (product.salePrice === 0) {
        product.currentPrice = product.basePrice;
      } else {
        product.currentPrice = product.salePrice;
      }
    });
    this.setState({ products: this.props.history, aisles });
  }

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
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedAisle,
      products: allProducts
    } = this.state;
    const filtered =
      selectedAisle && selectedAisle._id
        ? allProducts.filter(m => m.genre._id === selectedAisle._id)
        : allProducts;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const products = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: products };
  };

  render() {
    const { length: count } = this.state.products;
    const { pageSize, currentPage, sortColumn } = this.state;
    if (count === 0) return <p>No Recent Purchases.</p>;

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

export default History;
