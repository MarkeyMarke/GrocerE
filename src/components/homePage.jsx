import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Pastries from "../images/pastries.jpg";
import Easter from "../images/easter.jpeg";
import Meat from "../images/meat.jpeg";
import Fruits from "../images/fruits.jpeg";
import "./homePage.css";

//make reusable components (tables) so items with sales can be displayed
class HomePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      fade: true
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction, fade } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        fade={fade}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={Easter} alt="First slide" />
          <Carousel.Caption>
            <h3>Easter Sales</h3>
            <p>Starts on March 2nd, ends on May 1st.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Pastries} alt="Second slide" />

          <Carousel.Caption>
            <h3>Award-winning Pastries</h3>
            <p>Baked with 100% authenticity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Meat} alt="Third slide" />

          <Carousel.Caption>
            <h3>Great Meat</h3>
            <p>Hard to make you go or stay vegan.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Fruits} alt="Fourth slide" />

          <Carousel.Caption>
            <h3>The Freshest in Town</h3>
            <p>Straight from the Farms.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomePage;
