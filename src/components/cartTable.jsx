import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../common/table";

class CartTable extends Component {
  columns = [
    {
      path: "productName",
      label: "Product",
      content: product => (
        <Link style={{ color: "#9a0000" }} to={`/aisles/${product._id}`}>
          {product.productName}
        </Link>
      )
    },
    {
      key: "plusminus",
      content: product => {
        var minusButton = "btn btn-danger m-2";
        var plusButton = "btn btn-danger m-2";
        product["quantity"] === 1
          ? (minusButton = "btn btn-dark m-2")
          : (minusButton = "btn btn-danger m-2");

        product["quantity"] === product["numberInStock"]
          ? (plusButton = "btn btn-dark m-2")
          : (plusButton = "btn btn-danger m-2");
        return (
          <div>
            <button
              onClick={() => this.props.onDecrement(product)}
              className={minusButton}
              disabled={product["quantity"] === 1 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onIncrement(product)}
              className={plusButton}
              disabled={
                product["quantity"] === product["numberInStock"]
                  ? "disabled"
                  : ""
              }
            >
              +
            </button>
          </div>
        );
      }
    },
    {
      key: "quantity",
      label: "Quantity",
      content: product => product["quantity"]
    },
    {
      path: "currentPrice",
      label: "Price",
      content: product => this.props.setPrice(product)
    },
    {
      path: "Subtotal",
      label: "Subtotal",
      content: product => this.props.getSubtotal(product)
    },
    {
      key: "delete",
      label: "Delete",
      content: product => (
        <button
          onClick={() => this.props.onDelete(product)}
          className="btn btn-danger"
        >
          Delete
        </button>
      )
    }
  ];

  calcTotal = () => {
    var cartTemp = this.props.cart;
    var finalPrice = 0;
    for (var p = 0; p < cartTemp.length; p++) {
      finalPrice += cartTemp[p]["currentPrice"] * cartTemp[p]["quantity"];
      console.log(finalPrice);
    }
    return finalPrice;
  };

  render() {
    const pStyle = {
      fontSize: "150%"
    };

    return (
      <div>
        <Table
          columns={this.columns}
          data={this.props.cart}
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
        />

        <div>
          <p style={pStyle}>
            <b>Subtotal: </b> <span>${this.calcTotal().toFixed(2)}</span>
            <br />
            <b>Tax: </b>
            <span>${(this.calcTotal() * 0.0725).toFixed(2)}</span>
            <br />
            <b>Total:</b> <span>${(this.calcTotal() * 1.0725).toFixed(2)}</span>
          </p>
        </div>
        <button
          onClick={() => this.props.handlePhaseChange(2)}
          className="btn btn-danger btn-lg"
        >
          Checkout
        </button>
        <div />
      </div>
    );
  }
}

export default CartTable;
