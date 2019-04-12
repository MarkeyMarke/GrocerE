import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../common/table";

class CartTable extends Component {
  columns = [
    {
      path: "productName",
      label: "Product",
      content: product => (
        <Link to={`/aisles/${product._id}`}>{product.productName}</Link>
      )
    },
    {
      key: "plusminus",
      label: "",
      content: product => this.props.quantityButton(product)
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
      content: product => this.props.getButton(product)
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
    console.log(this.props.cart);
    if (this.props.cart.length == 0) {
      return <h1>The cart is empty</h1>;
    } else {
      // for (var i = 0; i <= this.props.cart.length; i++) {
      //   return <h1>{this.props.cart[i].productName} </h1>;
      // }
      return (
        <div>
          <Table
            columns={this.columns}
            data={this.props.cart}
            sortColumn={this.props.sortColumn}
            onSort={this.props.onSort}
          />

          <div>
            Subtotal: <span>${this.calcTotal().toFixed(2)}</span>
            <br />
            Tax: <span>${(this.calcTotal() * 0.0725).toFixed(2)}</span>
            <br />
            Total: <span>${(this.calcTotal() * 1.0725).toFixed(2)}</span>
          </div>
        </div>
      );
    }
    // return (
    //   <h1>this is the cart page</h1>
    //   // <div className="row">
    //   //   <div className="col">
    //   //     <cartTable
    //   //       products={products}
    //   //       sortColumn={sortColumn}
    //   //       setPrice={this.handlePriceChange}
    //   //       onSort={this.handleSort}
    //   //       getButton={this.handleButton}
    //   //     />
    //   //     <Pagination
    //   //       itemsCount={totalCount}
    //   //       pageSize={pageSize}
    //   //       currentPage={currentPage}
    //   //       onPageChange={this.handlePageChange}
    //   //     />
    //   //   </div>
    //   // </div>
    // );
  }
}

export default CartTable;
