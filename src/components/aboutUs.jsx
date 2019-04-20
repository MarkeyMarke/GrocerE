import React, { Component } from "react";
import DefaultPic from "../images/defaultPic.png";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 align="center">
          Welcome to GrocerE, your number one shopping source!
        </h2>
        <h6 text-align="justify">
          We're dedicated to giving you the very best of products, with a focus
          on variety, freshness, and uniqueness. Founded in 2019 by Rabia
          Mohiuddin, GrocerE has come a long way from its beginnings in a small
          office in San Jose, CA. When Rabia first started out, her passion for
          providing customers the best user experience gave her the impetus to
          turn hard work and inspiration into to a booming online store. We now
          serve customers all over the United States, and are thrilled to be a
          part of the top wing of the grocery industry. We hope you enjoy our
          products as much as we enjoy offering them to you. If you have any
          questions or comments, please don't hesitate to contact us!
        </h6>
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Mark" />
            <div class="card-body">
              <h5 class="card-title">Mark Kenneth Christian Casapao</h5>
              <p class="card-text">Project Manager / Frontend Developer</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Nick" />
            <div class="card-body">
              <h5 class="card-title">Nicholas Castro</h5>
              <p class="card-text">Backend Developer / Tester</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Cheng" />
            <div class="card-body">
              <h5 class="card-title">Cheng Chin Lim</h5>
              <p class="card-text">Backend Developer / Tester</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Isabelle" />
            <div class="card-body">
              <h5 class="card-title">Isabelle Low</h5>
              <p class="card-text">Frontend Developer / Documentation</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Kevin" />
            <div class="card-body">
              <h5 class="card-title">Kevin Ma</h5>
              <p class="card-text">Frontend Developer Lead</p>
            </div>
          </div>
        </div>
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Terry" />
            <div class="card-body">
              <h5 class="card-title">Theron Myers</h5>
              <p class="card-text">Backend Developer Lead</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Rabia" />
            <div class="card-body">
              <h5 class="card-title">Rabia Mohiuddin</h5>
              <p class="card-text">Product Owner / Backend Developer</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Atul" />
            <div class="card-body">
              <h5 class="card-title">Atul Murali</h5>
              <p class="card-text">Backend Developer / Tester</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Dom" />
            <div class="card-body">
              <h5 class="card-title">Thien Dominic Pham</h5>
              <p class="card-text">Backend Developer / Tester</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={DefaultPic} alt="Francis" />
            <div class="card-body">
              <h5 class="card-title">Francisco Romero</h5>
              <p class="card-text">Frontend Developer / Tester</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
