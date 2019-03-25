import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/ShoppingCart.png";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import RegisterButton from "./registerButton";

class NavBar extends Component {
  numberFormat = number => {
    if (number === 0) {
      return "";
    }
    return <span> ({number}) </span>;
  };
  render() {
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
              <NavLink className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aisles">
                Aisles <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/history">
                History{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart{this.numberFormat(this.props.cart.length)}{" "}
              </NavLink>
            </li>
          </ul>

          {this.props.loggedIn ? (
            ""
          ) : (
            <NavLink className="nav-link" to="/register">
              <RegisterButton />
            </NavLink>
          )}

          <NavLink className="nav-link" to={this.props.loggedIn ? 0 : "/login"}>
            {this.props.loggedIn ? (
              <LogoutButton
                onClick={() => {
                  this.props.setState({ loggedIn: false });
                  this.props.setState({ redirect: false });
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
