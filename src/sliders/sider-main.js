import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

import "./slider.css"

export default class MainSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "ease-in-out"
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide first_sl">
            <div className="offer-const">
              <h1>favorite little <span>things</span></h1>
              <p>Trending designs</p>
              <Link to='/products'>
                <button className="card_btn offer-const_btn">
                  All catalog
                </button>
              </Link>

            </div>
          </div>
          <div className="slide second_sl">
            <div className="offer-const">
              <h1>Summer <span>Collection</span></h1>
              <p>New Arrivals On Sale</p>
              <Link to='/products'>
                <button className="card_btn offer-const_btn">
                  All catalog
                </button>
              </Link>
            </div>
          </div>
          <div className="slide third_sl">
            <div className="offer-const">
              <h1>The biggest <span>sale</span></h1>
              <p>Special for today</p>
              <Link to='/products'>
                <button className="card_btn offer-const_btn">
                  All catalog
                </button>
              </Link>
            </div>
          </div>



        </Slider>
      </div>
    );
  }
}