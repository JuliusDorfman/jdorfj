import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {


  componentDidMount() {
    if ((window.location.pathname === '/') || (window.location.pathname === '/portfolio')) {
      Array.from(document.getElementsByClassName('nav-route-portfolio')).forEach((element, index, array) => {
        element.classList.add('portfolio-active-route')
      });
    }

    if (window.location.pathname === '/contact') {
      Array.from(document.getElementsByClassName('nav-route-contact')).forEach((element, index, array) => {
        element.classList.add('portfolio-active-route');
      });
    }

    // if (window.location.pathname === '/homepage') {
    //   var initialsElements = document.getElementsByClassName('icon-card-initials')
    //   var wrapperElements = document.getElementsByClassName('icon-card-initials-wrapper')
    //   for (var i in initialsElements) {
    //     if (initialsElements.hasOwnProperty(i)) {
    //       initialsElements[i].classList.add('icon-card-initials-large');
    //     }
    //   }
    //   for (var i in wrapperElements) {
    //     if (wrapperElements.hasOwnProperty(i)) {
    //       wrapperElements[i].classList.add('icon-card-initials-wrapper-large');
    //     }
    //   }
    // }
  }


  render() {
    return (
      <div className="navbar-component">
        <div className="main-nav">
          <ul>
            <li>
              <a className="nav-route-portfolio" href="/portfolio">Portfolio</a>
              <a className="nav-route-portfolio" href="/portfolio">Portfolio</a>
            </li>
            <div className="initials-icon">
              <a href="/homepage" className="icon-card-initials-wrapper">
                <p className="icon-card-initials">
                  J
                </p>
                <p className="icon-card-initials">
                  D
                </p>
              </a>
            </div>
            <li>
              <a className="nav-route-contact" href="/contact">Contact</a>
              <a className="nav-route-contact" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* <div className="contact-navbar-button">
          <a href="/contact">
            <p>
              Contact Me
            </p>
          </a>
        </div> */}
      </div>
    )
  }
}
