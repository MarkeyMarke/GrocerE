import React, { Component } from "react";
import LoginInput from "./loginInput";
import { Link, Redirect } from "react-router-dom";

class PasswordRecovery extends Component {
  state = {
    account: { username: "" },
    errors: {},
    success: false,
    successMessage:
      "You have successfully submitted a password recovery request to Grocer-E. We have sent a message to your email address with a new password, and instructions on how to set a new password."
  };

  handleError = errorMessage => {
    console.log(errorMessage);

    if (errorMessage === "Invalid email")
      this.setState({ errors: { username: errorMessage } });
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

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    /* Over here, add backend code for checking if the provided email address is in the
       database, and if it is, send the user an email with instructions for changing
       the password */

    this.setState({ success: true });
    console.log("The password recovery form was submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <LoginInput
            name="username"
            value={this.state.account.username}
            label="Email address"
            onChange={this.handleInputChange}
            error={this.state.errors.username}
            success={this.state.success}
            successMessage={this.state.successMessage}
          />

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

export default PasswordRecovery;
