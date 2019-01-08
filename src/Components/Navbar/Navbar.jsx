import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageValue: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // e.preventDefault();
    let newPageValue = e.target.getAttribute('value');

    this.setState({ pageValue: newPageValue }, () => {
      console.log("newPageValue", newPageValue)
    });
  }

  render() {
    return (
      <div className="navbar-component">
        <ul className="main-nav">
          <li>
            <a className="nav-link" href="/portfolio" value="portfolio" onClick={this.handleClick}>Portfolio</a>
          </li>
          <li className="initials-icon">
            <a href="/homepage" className="icon-card-initials-wrapper" value="homepage" onClick={this.handleClick}>
              <p className="icon-card-initials" value="homepage">
                J
              </p>
              <p className="icon-card-initials" value="homepage">
                D
              </p>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/contact" value="contact" onClick={this.handleClick}>Contact</a>
          </li>
        </ul>
      </div>
    )
  }
}
