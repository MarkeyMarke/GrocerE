import React, { Component } from "react";
import LoginInput from "./loginInput";
import { login } from "../firebase/firebaseAuth.js";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Modal from "react-awesome-modal";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
    popupShow: false,
    popupMessage: ""
  };

  handleError = errorMessage => {
    console.log(errorMessage);
    this.setState({ popupMessage: errorMessage });
    this.setState({ popupShow: true });
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

    var that = this; // Stores current value of this
    var test = login(
      this.state.account.username.trim(),
      this.state.account.password.trim(),
      this.handleError
    );

    test.then(function(result) {
      if (result) {
        // Successful login

        that.props.setState({ loggedIn: true });
        that.setState({ redirect: true });
      }
    });
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
            <Link to="/recovery">
              Forgot your password? <span className="sr-only">(current)</span>
            </Link>
            <br />
            <br />
            <button
              type="submit"
              disabled={this.validate()}
              className="btn btn-primary"
            >
              Submit
            </button>

            <Modal
              visible={this.state.popupShow}
              width="200"
              height="200"
              effect="fadeInUp"
              onClickAway={() => this.setState({ popupShow: true })}
            >
              <div>
                <center>
                  <h4>{this.state.popupMessage}</h4>
                </center>

                <center>
                  <Link
                    to="/login"
                    onClick={() => this.setState({ popupShow: false })}
                  >
                    <button class="btn btn-primary">Close</button>

                    <span className="sr-only">(current)</span>
                  </Link>
                </center>
              </div>
            </Modal>
          </form>
        </div>
      );
    }
  }
}

export default Login;
