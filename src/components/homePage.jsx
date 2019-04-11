import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import BabySales from "../images/baby_bloom.png";
import CookieFrenzy from "../images/cookie_frenzy.png";
import GameDay from "../images/game_day.jpg";
import MilkMonday from "../images/milk_monday.png";
import SodaSeason from "../images/soda_season.png";
import "./homePage.css";

//make reusable components (tables) so items with sales can be displayed
class HomePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      slide: true
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction, slide } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        slide={slide}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={MilkMonday} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={BabySales} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CookieFrenzy} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={GameDay} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SodaSeason} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomePage;
