import React, { Component } from "react";
import LoginInput from "./loginInput";
import { login, getUID } from "../firebase/firebaseAuth.js";
import { getCart } from "../firebase/firebaseDB.js";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Logo from "../images/ShoppingCart.png";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
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
    if (errorMessage === "Invalid email")
      this.setState({ errors: { username: errorMessage } });
    else if (errorMessage === "Invalid password")
      this.setState({ errors: { password: errorMessage } });
    else this.setState({ errors: errorMessage });
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
    this.setState({ submitted: true });

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    var tempThis = this; // Stores current value of this
    var loginVar = login(
      this.state.account.username.trim(),
      this.state.account.password.trim(),
      this.handleError
    );

    loginVar.then(function(result) {
      if (result) {
        // Successful login
        tempThis.setState({ success: true });

        setTimeout(() => {
          tempThis.props.setState({ redirect: true });
        }, 2000);

        var cartFromServer = getCart(getUID());
        var oldCart = tempThis.props.cart;

        cartFromServer.then(function(result) {
          const finalCart = Array.from(new Set(result.concat(oldCart)));
          tempThis.props.setCart(finalCart);
        });
      }
    });
  };

  render() {
    if (this.props.redirect === true) {
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
          {this.state.errors.length > 0 && (
            <React.Fragment>
              <br />
              <div className="alert alert-danger">{this.state.errors}</div>
            </React.Fragment>
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="card bg-light border-danger">
              <h2 className="card-header">
                <center>Login to Grocer-E</center>
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
                  placeholder="john@example.com"
                  onChange={this.handleInputChange}
                  error={this.state.errors.username}
                  label="Email address"
                  glyphicon="fa fa-envelope-o fa-fw"
                />
                <LoginInput
                  name="password"
                  value={this.state.account.password}
                  placeholder="Example password"
                  onChange={this.handleInputChange}
                  error={this.state.errors.password}
                  label="Password"
                  glyphicon="fa fa-key fa-fw"
                />

                <button
                  type="submit"
                  disabled={this.validate()}
                  className={this.setButtonClass()}
                >
                  {this.state.success ? "Logged in!" : "Login to your account"}
                </button>

                <br />
                <Link to="/recovery">
                  Forgot your password?{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Login;
