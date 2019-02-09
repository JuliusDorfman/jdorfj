import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './ReviewsCarousel.css';

export default class ReviewsCarousel extends Component {
  render() {
    return (
      <Carousel className="review-carousel" autoPlay>
        <div className="review-slide">
          <img src="/assets/images/iMatrix_2019-01-30.png" />
        </div>
        <div className="review-slide">
          <img src="/assets/images/iMatrix2_2019-01-30.png" />
        </div>
        <div className="review-slide">
          <img src="/assets/images/iMatrix3_2019-01-30.png" />
        </div>
      </Carousel>
    )
  }
}
