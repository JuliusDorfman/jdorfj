import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {

  render() {
    return (
      <div className="navbar-component">
          <ul className="main-nav">
            <li>
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="initials-icon">
              <a href="/homepage" className="icon-card-initials-wrapper">
                <p className="icon-card-initials">
                  J
                </p>
                <p className="icon-card-initials">
                  D
                </p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
      </div>
    )
  }
}
