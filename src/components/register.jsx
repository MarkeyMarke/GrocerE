import React, { Component } from "react";
import LoginInput from "./loginInput";
import { Redirect } from "react-router-dom";
import { createUser, logout, getUID } from "../firebase/firebaseAuth.js";
import Logo from "../images/ShoppingCart.png";
import { saveCart } from ".././firebase/firebaseDB.js";

class Register extends Component {
  state = {
    account: { username: "", password: "", confirmPassword: "" },
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
    if (errorMessage === "Password should be at least 6 characters") {
      this.setState({ errors: { password: errorMessage } });
    } else if (
      errorMessage === "The email address is already in use by another account."
    ) {
      this.setState({ errors: { username: errorMessage } });
    } else if (errorMessage === "Your passwords don't match!") {
      this.setState({ errors: { confirmPassword: errorMessage } });
    } else {
      this.setState({ errors: errorMessage });
    }
  };

  validate = () => {
    const errors = {};
    if (this.state.account.username.trim() === "")
      errors.username = "Username is required";

    if (this.state.account.password.trim() === "")
      errors.password = "Password is required";

    if (this.state.account.confirmPassword.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = e => {
    if (e.currentTarget.name.trim() === "username") {
      if (e.currentTarget.value.trim() === "") {
        return "Username is required";
      }
    }

    if (e.currentTarget.name.trim() === "password") {
      if (e.currentTarget.value.trim() === "") {
        return "Password is required";
      }
    }

    if (e.currentTarget.name.trim() === "confirmPassword") {
      if (e.currentTarget.value.trim() === "") {
        return "Password is required";
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

    if (this.state.account.confirmPassword !== this.state.account.password) {
      this.handleError("Your passwords don't match!");
    } else {
      var tempThis = this; // Stores current value of this

      tempThis.props.setState({ notRegisterCase: false });

      var createUserVar = createUser(
        this.state.account.username.trim(),
        this.state.account.password.trim(),
        tempThis.handleError
      );

      createUserVar.then(function(result) {
        if (result) {
          // Successful account creation

          var logoutVar = logout(tempThis.handleError);
          logoutVar.then(function(result) {
            console.log("Logged out after registering");
            tempThis.setState({ submitted: true });
            tempThis.setState({ success: true });

            setTimeout(() => {
              tempThis.setState({ redirect: true });
            }, 2000);

            tempThis.props.setState({ notRegisterCase: true });
            console.log("Set not register case to true");
          });
        }
      });
    }
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect exact to="/home" />;
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="card bg-light border-danger">
              <h2 className="card-header">
                <center>Register Account</center>
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
                {this.state.errors.length > 0 && (
                  <React.Fragment>
                    <div className="alert alert-danger">
                      {this.state.errors}
                    </div>
                  </React.Fragment>
                )}
                <LoginInput
                  name="username"
                  type="text"
                  value={this.state.account.username}
                  placeholder="john@example.com"
                  onChange={this.handleInputChange}
                  error={this.state.errors.username}
                  label="Email address"
                  glyphicon="fa fa-envelope-o fa-fw"
                />

                <LoginInput
                  name="password"
                  type="password"
                  value={this.state.account.password}
                  placeholder="Example password"
                  onChange={this.handleInputChange}
                  error={this.state.errors.password}
                  label="Password"
                  glyphicon="fa fa-key fa-fw"
                />

                <LoginInput
                  name="confirmPassword"
                  type="password"
                  value={this.state.account.confirmPassword}
                  placeholder="Example password"
                  onChange={this.handleInputChange}
                  error={this.state.errors.confirmPassword}
                  label="Confirm password"
                  glyphicon="fa fa-key fa-fw"
                />

                <button
                  type="submit"
                  disabled={this.validate()}
                  className={this.setButtonClass()}
                >
                  {this.state.success ? "Registered!" : "Register account"}
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Register;
