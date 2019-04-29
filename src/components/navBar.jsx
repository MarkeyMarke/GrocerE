import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import RegisterButton from "./registerButton";
import { logout, getUID } from "../firebase/firebaseAuth.js";
import { saveCart } from "../firebase/firebaseDB.js";
import { Redirect } from "react-router-dom";
import ModalTemplate from "./modalTemplate";
import "./navBar.css";

class NavBar extends Component {
  state = {
    errors: {},
    redirect: false,
    showModal: false
  };

  numberFormat = number => {
    if (number === 0) {
      return "";
    }
    return <span> ({number}) </span>;
  };

  handleError = errorMessage => {
    this.setState({ errors: errorMessage });
  };

  handleLogoutClick = () => {
    this.setState({ showModal: true });
  };

  handleLogout = () => {
    var tempThis = this; // Stores current value of this
    var logoutVar = logout(this.handleError);
    var UID = getUID();
    logoutVar.then(function(result) {
      if (result) {
        saveCart(tempThis.props.cart, UID);
        tempThis.props.setState({ redirect: false });
        tempThis.props.clearCart();
        tempThis.setState({ redirect: true });
      }
    });

    this.setState({ showModal: false });
  };

  render() {
    if (this.state.redirect === true) {
      this.setState({ redirect: false });
      return <Redirect exact to="/home" />;
    } else {
      return (
        <React.Fragment>
          <nav
            className="navbar navbar-expand-lg navbar-custom navbar-light"
            style={{ marginBottom: "10px" }}
          >
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={{
                      backgroundColor: "white",
                      color: "#9A0000"
                    }}
                    to="/home"
                  >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={{
                      backgroundColor: "white",
                      color: "#9A0000"
                    }}
                    to="/aisles"
                  >
                    Aisles <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={{
                      backgroundColor: "white",
                      color: "#9A0000"
                    }}
                    to="/history"
                  >
                    History{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={{
                      backgroundColor: "white",
                      color: "#9A0000"
                    }}
                    to="/cart"
                  >
                    Cart{this.numberFormat(this.props.cart.length)}{" "}
                  </NavLink>
                </li>
              </ul>

              {this.props.authenticated ? (
                ""
              ) : (
                <NavLink className="nav-link" to="/register">
                  <RegisterButton />
                </NavLink>
              )}

              <NavLink
                className="nav-link"
                to={this.props.authenticated ? 0 : "/login"}
              >
                {this.props.authenticated ? (
                  <LogoutButton onClick={this.handleLogoutClick} />
                ) : (
                  <LoginButton />
                )}
              </NavLink>

              {this.state.showModal ? (
                <ModalTemplate
                  showModal={this.state.showModal}
                  setState={p => {
                    this.setState(p);
                  }}
                  onLogout={this.handleLogout}
                />
              ) : null}
            </div>
          </nav>
          {this.state.errors.length > 0 && (
            <div className="alert alert-danger">{this.state.errors}</div>
          )}
        </React.Fragment>
      );
    }
  }
}
export default NavBar;
