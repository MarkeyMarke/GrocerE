import React, { Component } from "react";
import LoginInput from "./loginInput";
import { Redirect } from "react-router-dom";
import { createUser } from "../firebase/firebaseAuth.js";

class Register extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
    redirect: false,
    success: false,
    successMessage:
      "You have successfully registered a Grocer-E account! Feel free to browse our website and buy something... or not."
  };

  handleError = errorMessage => {
    if (errorMessage === "Password should be at least 6 characters") {
      this.setState({ errors: { password: errorMessage } });
    } else {
      this.setState({ errors: { username: errorMessage } });
    }
  };

  validate = () => {
    const errors = {};
    if (this.state.account.username.trim() === "")
      errors.username = "Username is required";

    if (this.state.account.password.trim() === "")
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

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    var tempThis = this; // Stores current value of this
    var createUserVar = createUser(
      this.state.account.username.trim(),
      this.state.account.password.trim(),
      this.handleError
    );

    createUserVar.then(function(result) {
      if (result) {
        // Successful account creation
        tempThis.setState({ success: true });

        setTimeout(() => {
          tempThis.setState({ redirect: true });
        }, 2000);
      }
    });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect exact to="/home" />;
    } else {
      return (
        <div>
          <center>
            <h3>Register a Grocer-E account</h3>
          </center>
          <form onSubmit={this.handleSubmit}>
            <LoginInput
              name="username"
              type="text"
              value={this.state.account.username}
              label="Username"
              onChange={this.handleInputChange}
              error={this.state.errors.username}
            />

            <LoginInput
              name="password"
              type="password"
              value={this.state.account.password}
              label="Password"
              onChange={this.handleInputChange}
              error={this.state.errors.password}
            />
            <span className="glyphicon glyphicon-eye-open" />

            {this.state.success && (
              <div className="alert alert-success">
                {this.state.successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={this.validate()}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Register;
