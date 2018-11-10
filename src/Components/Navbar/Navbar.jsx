import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {


  componentDidMount() {
    if ((window.location.pathname === '/') || (window.location.pathname === '/portfolio')) {
      Array.from(document.getElementsByClassName('nav-route-portfolio')).forEach((element, index, array) => {
        element.classList.add('active-route');
      });
      Array.from(document.getElementsByClassName('portfolio-hover-effect')).forEach((remEl) => {
        remEl.classList.remove('portfolio-hover-effect');
      });
    }

    if (window.location.pathname === '/contact') {
      Array.from(document.getElementsByClassName('nav-route-contact')).forEach((element, index, array) => {
        element.classList.add('active-route');
      });
      Array.from(document.getElementsByClassName('contact-hover-effect')).forEach((remEl) => {
        remEl.classList.remove('contact-hover-effect');
      });
    }

    if (window.location.pathname === '/homepage') {
      Array.from(document.getElementsByClassName('icon-card-initials-wrapper')).forEach((element, index, array) => {
        element.classList.add('icon-fill');
      });
    }
  }


  render() {
    return (
      <div className="navbar-component">
        <div className="main-nav">
          <ul>
            <li className="portfolio-hover-effect">
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
            <li className="contact-hover-effect">
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
