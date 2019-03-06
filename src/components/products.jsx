import React, { Component } from "react";
import ProductsTable from "./productsTable";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getProducts, getProduct } from "../services/fakeProductService";
import { paginate } from "../utils/paginate";
import { getAisles } from "../services/fakeAisleService";
import _ from "lodash";
import SearchBox from "./searchBox";

class Products extends Component {
  state = {
    products: [],
    aisles: [],
    cart: [],
    currentPage: 1,
    pageSize: 4,
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

  handleDelete = product => {
    //const products = this.state.products.filter(m => m._id !== product._id);
    //this.setState({products});
    const cartTemp = this.state.cart;
    cartTemp.push(product);
    this.props.onAddToCart(product);
    this.setState({ cart: cartTemp });
  };

  handleLike = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    this.setState({ products });
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
    if (searchQuery)
      filtered = allProducts.filter(m =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (selectedAisle && selectedAisle._id)
      filtered = allProducts.filter(m => m.genre._id === selectedAisle._id);

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
          <ListGroup
            items={this.state.aisles}
            selectedItem={this.state.selectedAisle}
            onItemSelect={this.handleAisleSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} products in the database. </p>
          <SearchBox value={this.searchQuery} onChange={this.handleSearch} />
          <ProductsTable
            products={products}
            sortColumn={sortColumn}
            setPrice={this.handlePriceChange}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
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
