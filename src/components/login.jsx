import React, { Component } from "react";
import LoginInput from "./loginInput";
import {login} from "../firebase/firebaseAuth.js";
import { Link, NavLink } from "react-router-dom";
import { Route, Redirect, Switch } from "react-router-dom";

class Login extends Component {
  state = {
    correctAccount: { username: "atul", password: "atul" },
    account: { username: "", password: "" },
    errors: {}
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
    var loginFunction = login(this.state.account.username.trim(),
    this.state.account.password.trim());

    loginFunction.then(function(result){
      if (result) {
        // Successful login
        tempThis.props.setState({ loggedIn: true });
        tempThis.setState({ redirect: true });
      }
    })
  };

  render() {
    if (this.props.redirect === true) {
      return <Redirect exact to="/home" />;
    } else {
      return (
        <div>
          <center>
            <h3>Login to your Grocer-E account</h3>
          </center>
          <form onSubmit={this.handleSubmit}>
            <LoginInput
              name="username"
              value={this.state.account.username}
              label="Username"
              onChange={this.handleInputChange}
              error={this.state.errors.username}
            />
            <LoginInput
              name="password"
              value={this.state.account.password}
              label="Password"
              onChange={this.handleInputChange}
              error={this.state.errors.password}
            />
            <Link to="/recovery">
              Forgot your password? <span className="sr-only">(current)</span>
            </Link>
            <br />
            <br />
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

export default Login;
