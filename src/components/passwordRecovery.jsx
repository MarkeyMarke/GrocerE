import React, { Component } from "react";
import LoginInput from "./loginInput";
import { Route, Redirect, Switch } from "react-router-dom";
import Modal from "react-awesome-modal";
import { Link } from "react-router-dom";

class PasswordRecovery extends Component {
  state = {
    account: { email: "" },
    errors: {},
    popupShow: false,
    popupMessage: ""
  };

  validate = () => {
    const errors = {};

    if (this.state.account.email.trim() === "")
      errors.email = "Email address is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = e => {
    if (e.currentTarget.name.trim() === "email") {
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

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    /* Over here, add backend code for checking if the provided email address is in the
       database, and if it is, send the user an email with instructions for changing
       the password */

    this.setState({
      popupMessage:
        "We have sent an email to your email address, " +
        this.state.account.email +
        ", with a new password and instructions on how to change it to a password of your choice."
    });
    this.setState({ popupShow: true });

    console.log("The password recovery form was submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <LoginInput
            name="email"
            value={this.state.account.email}
            label="Email address"
            onChange={this.handleInputChange}
            error={this.state.errors.email}
          />

          <button
            type="submit"
            disabled={this.validate()}
            class="btn btn-primary"
          >
            Submit
          </button>

          <Modal
            visible={this.state.popupShow}
            width="300"
            height="300"
            effect="fadeInUp"
            onClickAway={() => this.setState({ popupShow: true })}
          >
            <div>
              <center>
                <h4>Password recovery successful!</h4>
              </center>

              <p>{this.state.popupMessage}</p>

              <center>
                <Link
                  to="/home"
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

export default PasswordRecovery;
