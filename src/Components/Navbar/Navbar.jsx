import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pageValue: {}
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   // e.preventDefault();
  //   let newPageValue = e.target.getAttribute('value');

  //   this.setState({ pageValue: newPageValue }, () => {
  //     console.log("newPageValue", newPageValue)
  //   });
  // }

  render() {


    // window.onscroll = function() { scrollFunction() };

    // function scrollFunction() {
    //   const navComponentElement = document.getElementsByClassName('navbar-component')[0];
    //   const mainNavElement = navComponentElement.children[0]

    //   if (document.documentElement.scrollTop > 80) {
    //     navComponentElement.style.backgroundColor = "rgba(248, 248, 255, .3)";
    //     navComponentElement.style.borderBottom = "1px solid black";
    //     mainNavElement.style.margin = "1% auto";
    //   } else {
    //     navComponentElement.style.backgroundColor = "transparent";
    //     navComponentElement.style.borderBottom = "none";
    //     mainNavElement.style.margin = "2% auto";
    //   }
    // }

    return (
      <div className="navbar-component">
        <ul className="main-nav">
          {/* <li className="initials-icon">
            <a href="/portfolio" className="icon-card-initials-wrapper" value="portfolio" onClick={this.handleClick}>
              <p className="icon-card-initials" value="portfolio">
                J
              </p>
              <p className="icon-card-initials" value="homepage">
                D
              </p>
            </a>
          </li> */}
          <li>
            {/* <a className="nav-link" href="/portfolio" value="portfolio" onClick={this.handleClick}></a>
             */}
            <nav className='nav-main'>
              <div className='btn-toggle-nav'>
                <li className="initials-icon">
                  <a href="/portfolio" className="icon-card-initials-wrapper" value="portfolio" onClick={this.handleClick}>
                    <p className="icon-card-initials" value="portfolio">
                      J
                    </p>
                    <p className="icon-card-initials" value="homepage">
                      D
                    </p>
                  </a>
                </li>
              </div>
              <ul className='nav-links'>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="mailto:juliusdorfman@gmail.com">Contact Me</a></li>
              </ul>
            </nav>
          </li>
          {/* <li>
            <a className="nav-link" href="/homepage" value="homepage" onClick={this.handleClick}>Experience</a>
          </li> */}
        </ul>
        <div className="fixed-media-bar-wrapper">
          <ul className="fixed-media-bar">
            {/* <li title="Linkedin"><a href="https://www.linkedin.com/in/juliusgdorfman" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
            <li title="Resume"><a href="/assets/documents/JuliusGDorfman_Resume_2019_Sept.pdf" download="JuliusGDorfman_Resume_2019_Sept.pdf"><i class="far fa-file-pdf"></i></a></li> */}
          </ul>
        </div>
      </div>
    )
  }
}
