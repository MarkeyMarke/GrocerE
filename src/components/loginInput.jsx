import React, { Component } from "react";

class LoginInput extends Component {
  state = {
    hidden: true
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {this.props.name === "username" ? (
                <i className="fa fa-envelope-o fa-fw" />
              ) : (
                <i className="fa fa-key fa-fw" />
              )}
            </span>
          </div>

          <input
            value={this.props.value}
            onChange={this.props.onChange}
            type={
              this.props.name === "password" && this.state.hidden === true
                ? "password"
                : "text"
            }
            className="form-control"
            id={this.props.name}
            name={this.props.name}
          />

          {this.props.name === "password" ? (
            <div className="input-group-append">
              <span
                onClick={() => {
                  this.state.hidden
                    ? this.setState({ hidden: false })
                    : this.setState({ hidden: true });
                }}
                className="input-group-text"
              >
                <i
                  className={
                    this.state.hidden
                      ? "fa fa-eye fa-fw"
                      : "fa fa-eye-slash fa-fw"
                  }
                />
              </span>
            </div>
          ) : (
            ""
          )}
        </div>

        {this.props.error && (
          <div className="alert alert-danger">{this.props.error}</div>
        )}

        {this.props.success && (
          <div className="alert alert-success">{this.props.successMessage}</div>
        )}
      </div>
    );
  }
}
export default LoginInput;
