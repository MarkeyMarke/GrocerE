import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/ShoppingCart.png";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import RegisterButton from "./registerButton";
import { logout, isLoggedIn } from "../firebase/firebaseAuth.js";

class NavBar extends Component {
  numberFormat = number => {
    if (number === 0) {
      return "";
    }
    return <span> ({number}) </span>;
  };

  handleError = errorMessage => {};

  render() {
    var loggedIn = isLoggedIn();
    console.log(loggedIn);

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={Logo} width="30" height="30" alt="Logo" />
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

          {loggedIn ? (
            ""
          ) : (
            <NavLink className="nav-link" to="/register">
              <RegisterButton />
            </NavLink>
          )}

          <NavLink className="nav-link" to={loggedIn ? 0 : "/login"}>
            {loggedIn ? (
              <LogoutButton
                onClick={() => {
                  var tempThis = this; // Stores current value of this
                  var logoutVar = logout(this.handleError);

                  logoutVar.then(function(result) {
                    if (result) {
                      tempThis.props.setState({ redirect: false });
                    }
                  });
                }}
              />
            ) : (
              <LoginButton />
            )}
          </NavLink>
        </div>
      </nav>
    );
  }
}
export default NavBar;
