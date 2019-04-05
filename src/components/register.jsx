import React, { Component } from "react";
import LoginInput from "./loginInput";
import { Route, Redirect, Switch } from "react-router-dom";

class Register extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  handleError = errorMessage => {
    console.log(errorMessage);

    if (errorMessage === "Email already exists")
      this.setState({ errors: { username: errorMessage } });
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

    {
      /* Over here, add backend code for adding this.state.account.username and 
        this.state.account.password to the database, as long as the username and password
    isn't already in the database */
    }

    this.props.setState({ loggedIn: true });
    this.props.setState({ redirect: true });
  };

  render() {
    if (this.props.redirect === true) {
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

            <button
              type="submit"
              disabled={this.validate()}
              class="btn btn-primary"
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
