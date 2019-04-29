import React, { Component } from "react";
import Banner from "../images/Banner.png";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <img className="banner" src={Banner} alt="Banner" />
      </header>
    );
  }
}

export default Header;
