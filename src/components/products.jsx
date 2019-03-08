import React, { Component } from "react";
import ProductsTable from "./productsTable";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getProducts, getProduct } from "../services/fakeProductService";
import { paginate } from "../utils/paginate";
import { getAisles } from "../services/fakeAisleService";
import _ from "lodash";
class Products extends Component {
    state = { 
        products: [],
        aisles: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: {path: 'title', order: "asc"},
    };

    componentDidMount() {
        const aisles = [{ _id: '', name: 'All Aisles'}, ...getAisles()];
        var products = getProducts();
        products.forEach( product => {
            if(product.salePrice === 0) {
                product.currentPrice = product.basePrice;
                }
            else{
                product.currentPrice = product.salePrice;
            }        
        });
        this.setState({products, aisles});
    }

    handleAddToCart = (product) => {
        this.props.onAddToCart(product);
       };

    handlePriceChange = (product) => {
        const salePrice = product.salePrice;
        const basePrice = product.basePrice;
        if(salePrice === 0) {
        return <span> ${basePrice.toFixed(2)} </span>
        }
        return <p>${salePrice.toFixed(2)} <span style={{textDecoration:"line-through"}}>${basePrice.toFixed(2)}</span> </p>
    }
    getProduct(product._id).currentPrice = salePrice;
    return (
      <p>
        {" "}
        <span style={{ textDecoration: "line-through" }}>{basePrice}</span>{" "}
        {salePrice}
      </p>
    );
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
        const {pageSize, currentPage,sortColumn, selectedAisle, products: allProducts} = this.state;
        const filtered = selectedAisle && selectedAisle._id
        ? allProducts.filter(m => m.aisle._id === selectedAisle._id) : allProducts;

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
          <ProductsTable
            products={products}
            sortColumn={sortColumn}
            setPrice={this.handlePriceChange}
            onSort={this.handleSort}
            onAdd={this.handleAddToCart}
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
