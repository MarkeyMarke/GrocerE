import React, { Component } from "react";
import Mark from "../images/profilePictures/mark.jpg";
import Francisco from "../images/profilePictures/francisco.jpg";
import Rabia from "../images/profilePictures/rabia.png";
import Isabelle from "../images/profilePictures/isabelle.jpeg";
import Kevin from "../images/profilePictures/kevin.jpg";
import Dominic from "../images/profilePictures/dominic.jpg";
import Atul from "../images/profilePictures/atul.JPG";
import Nick from "../images/profilePictures/nick.jpg";
import Terry from "../images/profilePictures/terry.png";
import Cheng from "../images/profilePictures/cheng.jpg";
import "./aboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="welcome">Welcome to GrocerE, the #1 shopping source!</h2>
        <h6 className="welcomeMessage">
          We're dedicated to giving you the very best of products, with a focus
          on variety, freshness, and uniqueness. Founded in 2019 by Rabia
          Mohiuddin, GrocerE has come a long way from its beginnings in a small
          office in San Jose, CA. When Rabia first started out, her passion for
          providing customers the best user experience gave her the impetus to
          turn hard work and inspiration into to a booming online store. We now
          serve customers all over the Bay Area, and are thrilled to be a part
          of the top wing of the grocery industry. We hope you enjoy our
          products as much as we enjoy offering them to you. If you have any
          questions or comments, please don't hesitate to contact us!
        </h6>

        <h4 className="meet">MEET OUR TEAM</h4>
        <div className="card-group" style={{ paddingBottom: "1em" }}>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Mark} alt="Mark" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Mark Kenneth Christian Casapao</h5>
              <p className="card-text">Project Manager / Frontend Developer</p>
            </div>
          </div>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Kevin} alt="Kevin" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Kevin Ma</h5>
              <p className="card-text">Frontend Developer Lead</p>
            </div>
          </div>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Francisco} alt="Francis" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Francisco Romero</h5>
              <p className="card-text">Frontend Developer / Tester</p>
            </div>
          </div>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Atul} alt="Atul" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Atul Murali</h5>
              <p className="card-text">Frontend Developer / Tester</p>
            </div>
          </div>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Isabelle} alt="Isabelle" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Isabelle Low</h5>
              <p className="card-text">Frontend Developer / Documentation</p>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Terry} alt="Terry" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Theron Myers</h5>
              <p className="card-text">Backend Developer Lead</p>
            </div>
          </div>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Rabia} alt="Rabia" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Rabia Mohiuddin</h5>
              <p className="card-text">Product Owner / Backend Developer</p>
            </div>
          </div>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Nick} alt="Nick" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Nicholas Castro</h5>
              <p className="card-text">Backend Developer / Tester</p>
            </div>
          </div>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Cheng} alt="Cheng" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Cheng Chin Lim</h5>
              <p className="card-text">Backend Developer / Tester</p>
            </div>
          </div>
          <div className="card" style={{ padding: "0.5em" }}>
            <img className="card-img-top" src={Dominic} alt="Dom" />
            <div className="card-body" style={{ color: "#9A0000" }}>
              <h5 className="card-title">Thien Dominic Pham</h5>
              <p className="card-text">Backend Developer / Tester</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
