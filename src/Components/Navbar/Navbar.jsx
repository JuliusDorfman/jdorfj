import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {


  componentDidMount() {
    if ((window.location.pathname === '/') || (window.location.pathname === '/portfolio')) {
      const activeRoute = document.getElementsByClassName('nav-route-portfolio');
      Array.from(document.getElementsByClassName('nav-route-portfolio')).forEach((element, index, array) => {
        element.classList.add('portfolio-active-route')
      });
    }

    if (window.location.pathname === '/aboutme') {
      const activeRoute = document.getElementsByClassName('nav-route-aboutme');
      Array.from(document.getElementsByClassName('nav-route-aboutme')).forEach((element, index, array) => {
        element.classList.add('portfolio-active-route');
      });
    }
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
              <a className="nav-route-aboutme" href="/aboutme">About Me</a>
              <a className="nav-route-aboutme" href="/aboutme">About Me</a>
            </li>
          </ul>
        </div>
        <div className="contact-navbar-button">
          <a href="/contact">
            <p>
              Contact Me
            </p>
          </a>
        </div>
      </div>
    )
  }
}
