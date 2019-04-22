import React, { Component } from "react";
import LoginInput from "./loginInput";
import { Redirect } from "react-router-dom";
import { createUser } from "../firebase/firebaseAuth.js";

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
        return "btn btn-success btn-block";
      } else {
        return "btn btn-danger btn-block";
      }
    } else {
      return "btn btn-primary btn-block";
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

    if (this.state.account.confirmPassword !== this.state.account.password) {
      this.handleError("Your passwords don't match!");
    } else {
      var tempThis = this; // Stores current value of this
      var createUserVar = createUser(
        this.state.account.username.trim(),
        this.state.account.password.trim(),
        this.handleError
      );

      createUserVar.then(function(result) {
        if (result) {
          // Successful account creation
          tempThis.setState({ submitted: true });
          tempThis.setState({ success: true });

          setTimeout(() => {
            tempThis.setState({ redirect: true });
          }, 2000);
        }
      });
    }
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect exact to="/home" />;
    } else {
      return (
        <div>
          {this.state.errors.length > 0 && (
            <React.Fragment>
              <br />
              <div className="alert alert-danger">{this.state.errors}</div>
            </React.Fragment>
          )}
          <center>
            <h3>Register a Grocer-E account</h3>
          </center>
          <form className="center" onSubmit={this.handleSubmit}>
            <LoginInput
              name="username"
              type="text"
              value={this.state.account.username}
              placeholder="Email address"
              onChange={this.handleInputChange}
              error={this.state.errors.username}
            />

            <LoginInput
              name="password"
              type="password"
              value={this.state.account.password}
              placeholder="Password"
              onChange={this.handleInputChange}
              error={this.state.errors.password}
            />
            <span className="glyphicon glyphicon-eye-open" />

            <LoginInput
              name="confirmPassword"
              type="password"
              value={this.state.account.confirmPassword}
              placeholder="Confirm password"
              onChange={this.handleInputChange}
              error={this.state.errors.confirmPassword}
            />
            <span className="glyphicon glyphicon-eye-open" />

            <button
              type="submit"
              disabled={this.validate()}
              className={this.setButtonClass()}
            >
              {this.state.success ? "Registered!" : "Register account"}
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Register;
