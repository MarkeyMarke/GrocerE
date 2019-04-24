import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const Links = {
      color: "#FFFFFF",
      cursor: "pointer",
      margin: "5px"
    };

    const Spacing = {
      paddingTop: "7px",
      paddingBottom: "10px",
      textAlign: "center"
    };

    const footerStyle = {
      paddingTop: "10px",
      width: "100%",
      color: "#FFFFFF",
      textAlign: "center"
      //   zIndex: "10"
    };
    const footerPosition = {
      backgroundColor: "#9A0000",
      position: "relative",
      height: "102px", //Bad fix to the "whitespace" problem, I'd like a more elegant solution later on
      bottom: "0",
      width: "100%"
    };

    const footerLinksContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    };

    return (
      <div style={footerPosition}>
        <div style={footerStyle}>
          <div>
            <div style={footerLinksContainer}>
              <Link to={"/aboutus"} style={Links}>
                About Us
              </Link>
              <Link to={"/terms"} style={Links}>
                Terms
              </Link>
            </div>
            <div style={Spacing}>
              © {new Date().getFullYear()} GrocerE, Inc.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
