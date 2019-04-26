import React, { Component } from "react";
import LoginInput from "./loginInput";
import { Redirect } from "react-router-dom";
import { sendPasswordResetEmail } from "../firebase/firebaseAuth.js";
import Logo from "../images/ShoppingCart.png";

class PasswordRecovery extends Component {
  state = {
    account: { username: "" },
    errors: {},
    redirect: false,
    success: false,
    submitted: false
  };

  setButtonClass = () => {
    if (this.state.submitted === true) {
      if (this.state.success === true) {
        return "btn btn-success btn-block btn-lg";
      } else {
        return "btn btn-danger btn-block btn-lg";
      }
    } else {
      return "btn btn-danger btn-block btn-lg";
    }
  };

  handleError = errorMessage => {
    if (errorMessage === "The email address is badly formatted.")
      this.setState({ errors: { username: errorMessage } });
    else this.setState({ errors: errorMessage });
  };

  validate = () => {
    const errors = {};

    if (this.state.account.username.trim() === "")
      errors.username = "Email address is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = e => {
    if (e.currentTarget.name.trim() === "username") {
      if (e.currentTarget.value.trim() === "") {
        return "Email address is required";
      }
    }
  };

  handleInputChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e);

    if (errorMessage) {
      errors[e.currentTarget.name] = errorMessage;
    } else {
      delete errors[e.currentTarget.name];
    }

    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    var tempThis = this; // Stores current value of this
    var sendResetPasswordEmailVar = sendPasswordResetEmail(
      this.state.account.username.trim(),
      this.handleError
    );

    sendResetPasswordEmailVar.then(function(result) {
      if (result) {
        // Email successfully sent
        tempThis.setState({ success: true });

        setTimeout(() => {
          tempThis.setState({ redirect: true });
        }, 2000);

        console.log("The password recovery form was submitted");
      }
    });
  };

  render() {
    if (this.state.redirect === true) return <Redirect exact to="/home" />;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.state.errors.length > 0 && (
          <React.Fragment>
            <br />
            <div className="alert alert-danger">{this.state.errors}</div>
          </React.Fragment>
        )}

        <form onSubmit={this.handleSubmit}>
          <div className="card bg-light border-danger">
            <h2 className="card-header">
              <center>Account Recovery</center>
              <br />
              <center>
                <img
                  className="logo"
                  src={Logo}
                  width="300"
                  height="300"
                  alt="Logo"
                />
              </center>
            </h2>
            <div className="card-body">
              <LoginInput
                name="username"
                value={this.state.account.username}
                placeholder="Email address"
                onChange={this.handleInputChange}
                error={this.state.errors.username}
              />

              <button
                type="submit"
                disabled={this.validate()}
                className={this.setButtonClass()}
              >
                {this.state.success
                  ? "Password reset email sent!"
                  : "Reset password"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordRecovery;
