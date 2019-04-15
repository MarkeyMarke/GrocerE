import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/ShoppingCart.png";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import RegisterButton from "./registerButton";
import { logout } from "../firebase/firebaseAuth.js";
import { Redirect } from "react-router-dom";
import ModalTemplate from "./modalTemplate";

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

    logoutVar.then(function(result) {
      if (result) {
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img
                className="logo"
                src={Logo}
                width="30"
                height="30"
                alt="Logo"
              />
              Grocer-E
            </Link>
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
                      borderStyle: "dashed",
                      borderWidth: 1,
                      borderColor: "gray",
                      padding: 2,
                      marginTop: 4
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
                      borderStyle: "dashed",
                      borderWidth: 1,
                      borderColor: "gray",
                      padding: 2,
                      marginTop: 4
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
                      borderStyle: "dashed",
                      borderWidth: 1,
                      borderColor: "gray",
                      padding: 2,
                      marginTop: 4
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
                      borderStyle: "dashed",
                      borderWidth: 1,
                      borderColor: "gray",
                      padding: 2,
                      marginTop: 4
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
