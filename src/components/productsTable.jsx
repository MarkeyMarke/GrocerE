import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../common/table";
import bananas from "../images/bananas.jpg";

class ProductsTable extends Component {
  columns = [
    {
      key: "image",
      content: product => {
        if (product.productName !== "Bananas - 1 lb") {
          //I had to put in this very special case because for whatever reason, the bananas wouldn't render.
          return (
            <img
              id="product-image"
              alt={"Image of " + product.productName}
              src={
                process.env.PUBLIC_URL +
                "/displayImages/" +
                product._id +
                ".jpg"
              }
            />
          );
        } else {
          return (
            <img
              id="product-image"
              alt={"Image of " + product.productName}
              src={bananas}
            />
          );
        }
      }
    },
    {
      path: "productName",
      label: "Product",
      content: product => (
        <Link style={{ color: "#9a0000" }} to={`/aisles/${product._id}`}>
          {product.productName}
        </Link>
      )
    },
    { path: "aisle.name", label: "Aisle" },
    { path: "numberInStock", label: "Stock" },
    {
      path: "currentPrice",
      label: "Price",
      content: product => this.props.setPrice(product)
    },
    {
      key: "delete",
      content: product => this.props.getButton(product)
    }
  ];
  render() {
    const { products, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={products}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ProductsTable;
