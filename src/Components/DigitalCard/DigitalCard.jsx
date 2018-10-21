import React, { Component } from 'react';
import './DigitalCard.css';

export default class DigitalCard extends Component {


  componentDidMount() {
    let digitalCardContainer = document.getElementsByClassName('digital-card-container')[0]
    let digitalCard = document.getElementsByClassName('digital-card')[0]
    let digitalCardBack = document.getElementsByClassName('digital-card-back')[0]
    let lineWrapperBack = document.getElementsByClassName('line-wrappers-back')[0]
    let bluelineWrapperBack = document.getElementsByClassName("orange-line-flavor-back")[0]
    let orangelineWrapperBack = document.getElementsByClassName("blue-line-flavor-back")[0]

    digitalCardContainer.addEventListener('click', () => {
      if (digitalCard.style.transform === "scaleX(-1)") {
        digitalCard.style.transform = "scaleX(1)";
        digitalCardBack.style.transform = "scaleX(-1)";
        digitalCardBack.style.background = " rgba(50, 50, 50, 0)";
        lineWrapperBack.style.transform = "scaleX(0)";
        bluelineWrapperBack.style.transform = "scaleX(0)";
        orangelineWrapperBack.style.transform = "scaleX(0)";
      } else {
        digitalCard.style.transform = "scaleX(-1)";
        digitalCardBack.style.transform = "scaleX(1)";
        digitalCardBack.style.background = " rgba(50, 50, 50, 1)";
        lineWrapperBack.style.transform = "scaleX(-1)";
        bluelineWrapperBack.style.transform = "scaleX(-1)";
        orangelineWrapperBack.style.transform = "scaleX(-1)";
      }
    })
  }

  render() {

    return (
      <div className="digital-card-component">
        <div className="digital-card-container">

          <div className="digital-card">
            <div className="card-content">
              <div className="card-initials-wrapper">
                {/* <div className="card-initials-background" /> */}
                <p className="card-initials">
                  J
                  </p>
                <p className="card-initials">
                  D
                </p>
              </div>
              <div className="card-name">
                <p>
                  Julius
              </p>
                <p>
                  Dorfman
              </p>
                <p className="tagline">
                  Web Developer
              </p>
              </div>
            </div>
            <div className="line-wrappers">
              <div className="blue-line-flavor"></div>
              <div className="orange-line-flavor"></div>
            </div>
          </div>

          <div className="digital-card-back">
            <div className="line-wrappers-back">
              <div className="blue-line-flavor-back"></div>
              <div className="orange-line-flavor-back"></div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
