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

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
      const navComponentElement = document.getElementsByClassName('navbar-component')[0];
      const mainNavElement = navComponentElement.children[0]
      const contactText = navComponentElement.children[0].children[2].children[0];

      if (document.documentElement.scrollTop > 80) {
        navComponentElement.style.backgroundColor = "rgba(248, 248, 255, .9)";
        mainNavElement.style.margin = ".75% auto";
      } else {
        navComponentElement.style.backgroundColor = "transparent";
        mainNavElement.style.margin = "2% auto";
      }

    }

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
