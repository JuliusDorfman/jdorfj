import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-component">
        <ul>
          <li>
            <a href="/portfolio">Portfolio</a>
            <a href="/portfolio">Portfolio</a>
          </li>
            <div className="initials-icon">
              <a href="/" className="icon-card-initials-wrapper">
                <p className="icon-card-initials">
                  J
            </p>
                <p className="icon-card-initials">
                  D
            </p>
              </a>
            </div>
          <li>
            <a href="/aboutme">About Me</a>
            <a href="/aboutme">About Me</a>
          </li>
        </ul>
      </div>
    )
  }
}
