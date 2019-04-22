import React, { Component } from "react";
import LoginInput from "./loginInput";
import { login } from "../firebase/firebaseAuth.js";
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
      }
    });
  };

  render() {
    if (this.props.redirect === true) {
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
          <form className="outer-wrapper" onSubmit={this.handleSubmit}>
            <br />
            <br />
            <div className="card bg-light border-danger">
              <h5 className="card-header">
                <img
                  className="logo"
                  src={Logo}
                  width="50"
                  height="50"
                  alt="Logo"
                />
                <center>&nbsp; Login to your Grocer-E account</center>
              </h5>
              <div className="card-body">
                <LoginInput
                  name="username"
                  value={this.state.account.username}
                  placeholder="Email address"
                  onChange={this.handleInputChange}
                  error={this.state.errors.username}
                />
                <LoginInput
                  name="password"
                  value={this.state.account.password}
                  placeholder="Password"
                  onChange={this.handleInputChange}
                  error={this.state.errors.password}
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
