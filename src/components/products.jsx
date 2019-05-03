import React, { Component } from "react";
import ProductsTable from "./productsTable";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getProducts } from "../services/fakeProductService";
import { paginate } from "../utils/paginate";
import { getAisles } from "../services/fakeAisleService";
import _ from "lodash";
import SearchBox from "./searchBox";
import "./products.css";
class Products extends Component {
  state = {
    products: [],
    aisles: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    selectedAisle: null,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const aisles = [{ _id: "", name: "All Aisles" }, ...getAisles()];
    var products = getProducts();
    products.forEach(product => {
      if (product.salePrice === 0) {
        product.currentPrice = product.basePrice;
      } else {
        product.currentPrice = product.salePrice;
      }
    });
    this.setState({ products: getProducts(), aisles });
  }

  handleAddToCart = product => {
    this.props.onAddToCart(product);
  };

  handleButton = product => {
    let cart = this.props.cart;
    //console.log("cart:", cart);
    var p;
    for (p in cart) {
      //console.log(cart[p]);
      if (cart[p]._id === product._id) {
        return (
          <button
            onClick={() => this.handleAddToCart(product)}
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
        onClick={() => this.handleAddToCart(product)}
        id="addCartButton"
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
    return (
      <p>
        ${salePrice.toFixed(2)}{" "}
        <span style={{ textDecoration: "line-through" }}>
          ${basePrice.toFixed(2)}
        </span>{" "}
      </p>
    );
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleAisleSelect = aisle => {
    this.setState({ selectedAisle: aisle, searchQuery: "", currentPage: 1 });
    document.getElementById("searchInput").value = "";
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedAisle: null, currentPage: 1 });
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
      searchQuery,
      products: allProducts
    } = this.state;
    let filtered = allProducts;

    //if searchQuery is empty, if statement does not execute
    if (searchQuery) {
      filtered = allProducts.filter(m => {
        return m.productName.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else if (selectedAisle && selectedAisle.name === "On Sale") {
      filtered = allProducts.filter(m => m.salePrice !== 0);
    } else if (selectedAisle && selectedAisle._id) {
      filtered = allProducts.filter(m => m.aisle._id === selectedAisle._id);
    }

    //old code before adding searchbar function
    // const filtered =
    //   selectedAisle && selectedAisle._id
    //     ? allProducts.filter(m => m.genre._id === selectedAisle._id)
    //     : allProducts;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const products = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: products };
  };

  render() {
    const { length: count } = this.state.products;
    const { pageSize, currentPage, sortColumn } = this.state;
    if (count === 0) return <p>There are no products in the database.</p>;

    const { totalCount, data: products } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <p
            style={{
              color: "#9a0000",
              backgroundColor: "white",
              fontSize: "175%"
            }}
          >
            <span id="aisle-select-text">Choose your aisle:</span>
          </p>
          <ListGroup
            items={this.state.aisles}
            selectedItem={this.state.selectedAisle}
            onItemSelect={this.handleAisleSelect}
          />
        </div>
        <div className="col-9">
          <SearchBox value={this.searchQuery} onChange={this.handleSearch} />
          <ProductsTable
            products={products}
            sortColumn={sortColumn}
            setPrice={this.handlePriceChange}
            getButton={this.handleButton}
            onSort={this.handleSort}
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

export default Products;
