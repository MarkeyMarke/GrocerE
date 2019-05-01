import React, { Component } from "react";
import LoginInput from "./loginInput";

class CheckoutPage extends Component {
  state = {
    information: {
      fullname: "",
      email: "",
      address: "",
      city: "",
      americanState: "",
      zipCode: "",
      nameOnCard: "",
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      cvv: ""
    },
    errors: {},
    success: false,
    submitted: false,
    orderNumbers: []
  };

  generateOrderNumber = () => {
    const tempOrderNumbers = this.state.orderNumbers;
    while (true) {
      var uniqueNumber = new Date().getTime().toString(); // creates a 13 digit number
      uniqueNumber += uniqueNumber + Math.floor(Math.random() * 10); // adds an extra digit
      if (!tempOrderNumbers) {
        tempOrderNumbers.push(uniqueNumber);
        this.setState({ orderNumbers: tempOrderNumbers });
        return uniqueNumber;
      }
      if (!tempOrderNumbers.includes(uniqueNumber)) {
        tempOrderNumbers.push(uniqueNumber);
        this.setState({ orderNumbers: tempOrderNumbers });
        return uniqueNumber;
      }
    }
  };

  checkout = () => {
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var uniqueNumber = this.generateOrderNumber();
    const products = this.props.cart;
    let tempProducts = [...products];
    let x;
    for (x in tempProducts) {
      tempProducts[x] = {
        ...tempProducts[x],
        orderNum: [
          uniqueNumber.slice(0, 4),
          uniqueNumber.slice(4, 10),
          uniqueNumber.slice(10, 14)
        ].join("-"),
        dateOfPurchase: year + "/" + month + "/" + day
      };
    }

    var history;
    history = this.props.history;

    if (!history || !history.length) {
      this.props.appendToHistory(tempProducts);
    } else {
      let appended = tempProducts.concat(history);
      this.props.appendToHistory(appended);
    }

    this.props.clearCart();
  };

  setButtonClass = () => {
    if (this.state.submitted === true) {
      if (this.state.success === true) {
        return "btn btn-success btn-block";
      } else {
        return "btn btn-danger btn-block";
      }
    } else {
      return "btn btn-danger btn-block";
    }
  };

  validate = () => {
    const errors = {};
    if (this.state.information.fullname.trim() === "")
      errors.fullname = "Full name is required";

    if (this.state.information.email.trim() === "")
      errors.email = "Email address is required";

    if (this.state.information.address.trim() === "")
      errors.address = "Billing address is required";

    if (this.state.information.city.trim() === "")
      errors.city = "City is required";

    if (this.state.information.americanState.trim() === "")
      errors.americanState = "State is required";

    if (this.state.information.zipCode.trim() === "")
      errors.zipCode = "Zip code is required";

    if (this.state.information.nameOnCard.trim() === "")
      errors.nameOnCard = "Credit card name is required";

    if (this.state.information.cardNumber.trim() === "")
      errors.cardNumber = "Credit card number is required";

    if (this.state.information.expirationMonth.trim() === "")
      errors.expirationMonth = "Expiration month is required";

    if (this.state.information.expirationYear.trim() === "")
      errors.expirationYear = "Expiration year is required";

    if (this.state.information.cvv.trim() === "")
      errors.cvv = "CVV is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = e => {
    if (e.currentTarget.name.trim() === "fullname") {
      if (e.currentTarget.value.trim() === "") {
        return "Full name is required";
      }
    }

    if (e.currentTarget.name.trim() === "email") {
      if (e.currentTarget.value.trim() === "") {
        return "Email address is required";
      }
    }

    if (e.currentTarget.name.trim() === "address") {
      if (e.currentTarget.value.trim() === "") {
        return "Billing address is required";
      }
    }

    if (e.currentTarget.name.trim() === "city") {
      if (e.currentTarget.value.trim() === "") {
        return "City is required";
      }
    }

    if (e.currentTarget.name.trim() === "americanState") {
      if (e.currentTarget.value.trim() === "") {
        return "State is required";
      }
    }

    if (e.currentTarget.name.trim() === "zip") {
      if (e.currentTarget.value.trim() === "") {
        return "Zip code is required";
      }
    }

    if (e.currentTarget.name.trim() === "nameOnCard") {
      if (e.currentTarget.value.trim() === "") {
        return "Credit card name is required";
      }
    }

    if (e.currentTarget.name.trim() === "cardNumber") {
      if (e.currentTarget.value.trim() === "") {
        return "Credit card number is required";
      }
    }

    if (e.currentTarget.name.trim() === "expirationMonth") {
      if (e.currentTarget.value.trim() === "") {
        return "Expiration month is required";
      }
    }

    if (e.currentTarget.name.trim() === "expirationYear") {
      if (e.currentTarget.value.trim() === "") {
        return "Expiration year is required";
      }
    }

    if (e.currentTarget.name.trim() === "ccv") {
      if (e.currentTarget.value.trim() === "") {
        return "CVV is required";
      }
    }
  };

  handleInputChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e);
    console.log(e);
    if (errorMessage) {
      errors[e.currentTarget.name] = errorMessage;
    } else {
      delete errors[e.currentTarget.name];
    }

    const information = { ...this.state.information };
    information[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ information, errors });
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ submitted: true });
    this.setState({ errors: errors || {} });
    this.props.handlePhaseChange(3);

    this.checkout();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="checkoutRow">
          <div className="col-75">
            <div className="checkoutContainer">
              <div className="checkoutRow">
                <div className="col-50">
                  <h3>Billing Address</h3>

                  <LoginInput
                    name="fullname"
                    label="Full name"
                    value={this.state.information.fullname}
                    placeholder="John D. Smith"
                    onChange={e => this.handleInputChange(e)}
                    glyphicon="fa fa-user fa-fw"
                    error={this.state.errors.fullname}
                  />

                  <LoginInput
                    name="email"
                    label="Email address"
                    value={this.state.information.email}
                    placeholder="john@example.com"
                    onChange={e => this.handleInputChange(e)}
                    glyphicon="fa fa-envelope-o fa-fw"
                    error={this.state.errors.email}
                  />

                  <LoginInput
                    name="address"
                    label="Address"
                    value={this.state.information.address}
                    placeholder="123 S. 10th Street"
                    onChange={e => this.handleInputChange(e)}
                    glyphicon="fa fa-address-card-o fa-fw"
                    error={this.state.errors.address}
                  />

                  <LoginInput
                    name="city"
                    label="City"
                    value={this.state.information.city}
                    placeholder="San Jose"
                    onChange={e => this.handleInputChange(e)}
                    glyphicon="fa fa-institution fa-fw"
                    error={this.state.errors.city}
                  />

                  <div className="row">
                    <div className="col-50">
                      <LoginInput
                        name="americanState"
                        label="State"
                        value={this.state.information.americanState}
                        placeholder="California"
                        onChange={e => this.handleInputChange(e)}
                        glyphicon="fa fa-flag fa-fw"
                        error={this.state.errors.americanState}
                      />
                    </div>
                    <div className="col-50">
                      <LoginInput
                        name="zipCode"
                        label="Zip Code"
                        value={this.state.information.zipCode}
                        placeholder="00001"
                        onChange={e => this.handleInputChange(e)}
                        glyphicon="fa fa-map-pin fa-fw"
                        error={this.state.errors.zipCode}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa fa-fw" />
                    <i className="fa fa-cc-amex fa-fw" />
                    <i className="fa fa-cc-mastercard fa-fw" />
                    <i className="fa fa-cc-discover fa-fw" />
                  </div>

                  <LoginInput
                    name="nameOnCard"
                    label="Name on Card"
                    value={this.state.information.nameOnCard}
                    placeholder="John Duncan Smith"
                    onChange={e => this.handleInputChange(e)}
                    glyphicon="fa fa-credit-card fa-fw"
                    error={this.state.errors.nameOnCard}
                  />

                  <LoginInput
                    name="cardNumber"
                    label="Credit card number"
                    value={this.state.information.cardNumber}
                    placeholder="1111-2222-3333-4444"
                    onChange={e => this.handleInputChange(e)}
                    glyphicon="fa fa-credit-card fa-fw"
                    error={this.state.errors.cardNumber}
                  />

                  <LoginInput
                    name="expirationMonth"
                    label="Expiration month"
                    value={this.state.information.expirationMonth}
                    placeholder="October"
                    onChange={e => this.handleInputChange(e)}
                    glyphicon="fa fa-credit-card fa-fw"
                    error={this.state.errors.expirationMonth}
                  />

                  <div className="row">
                    <div className="col-50">
                      <LoginInput
                        name="expirationYear"
                        label="Expiration year"
                        value={this.state.information.expirationYear}
                        placeholder="2020"
                        onChange={e => this.handleInputChange(e)}
                        glyphicon="fa fa-credit-card fa-fw"
                        error={this.state.errors.expirationYear}
                      />
                    </div>
                    <div className="col-50">
                      <LoginInput
                        name="cvv"
                        label="CVV"
                        value={this.state.information.cvv}
                        placeholder="123"
                        onChange={e => this.handleInputChange(e)}
                        glyphicon="fa fa-credit-card fa-fw"
                        error={this.state.errors.ccv}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={this.validate()}
                className={this.setButtonClass()}
              >
                {this.state.success
                  ? "Checkout email sent!"
                  : "Confirm checkout"}
              </button>
              <br />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CheckoutPage;
