import React, { Component } from "react";
import { getProduct } from "../services/fakeProductService";
import "./productDescription.css";

class ProductDescription extends Component {
  render() {
    const productId = this.props.match.params.id;
    const product = getProduct(productId);
    return (
      <div id="page-container">
        <div id="back-container">
          <ul id="menu">
            <li id="back-icon">
              <a tabIndex="0" href="javascript:history.go(-1)">
                &larr;
              </a>
            </li>
            <li id="back-text">
              <a tabIndex="0" href="javascript:history.go(-1)">
                Back
              </a>
            </li>
          </ul>
        </div>
        <div style={{ clear: "both" }} />
        <div id="image-container">
          <img
            id="image"
            alt={"Image of " + product.productName}
            src={
              process.env.PUBLIC_URL + "/displayImages/" + productId + ".jpg"
            }
          />
        </div>
        <div id="product-info-container">
          <h1 id="product-title">{product.productName}</h1>
          <div id="product-price">
            <PriceLabel product={product} />
          </div>
          <div id="product-stock">
            <StockInfo product={product} />
          </div>
          <div id="addtocart-button">
            <AddToCartButton
              product={product}
              onAddToCart={this.props.onAddToCart}
              cart={this.props.cart}
            />
          </div>
        </div>
      </div>
    );
  }
}

function PriceLabel(props) {
  const product = props.product;
  if (product.salePrice !== 0)
    return (
      <h2>
        ${product.salePrice.toFixed(2)}
        <span style={{ paddingLeft: 15, textDecoration: "line-through" }}>
          ${product.basePrice.toFixed(2)}
        </span>
      </h2>
    );
  else return <h2>${product.basePrice.toFixed(2)}</h2>;
}

function StockInfo(props) {
  const product = props.product;
  if (product.numberInStock === 0) {
    return <h2>Out Of Stock</h2>;
  }
  if (product.numberInStock > 10) {
    return <h2>In Stock</h2>;
  }
  return <h3>Only {product.numberInStock} Left In Stock - Order Soon</h3>;
}

function AddToCartButton(props) {
  const product = props.product;
  let cart = props.cart;
  console.log("cart:", cart);
  var p;
  for (p in cart) {
    console.log(cart[p]);
    if (cart[p]._id === product._id) {
      return (
        <div>
          <button
            style={{ float: "left", marginRight: 20 }}
            onClick={() => props.onAddToCart(product)}
            className="btn btn-outline-danger"
            disabled
          >
            Added to Cart
          </button>
          <p style={{ paddingTop: 5 }}>
            You Can Set Quantities In The Cart Page
          </p>
        </div>
      );
    }
  }
  return (
    <button
      onClick={() => props.onAddToCart(product)}
      className="btn btn-outline-danger"
    >
      Add to Cart
    </button>
  );
}

export default ProductDescription;
