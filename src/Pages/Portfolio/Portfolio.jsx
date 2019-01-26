import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Parallax from 'parallax-js';
import './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: {}
    }
  }


  componentDidMount() {
    var scene = document.getElementById('scene');
    new Parallax(scene);

    var scene2 = document.getElementById('scene2');
    new Parallax(scene2);
  }

  render() {
    return (
      <div className="portfolio-component">
        <Navbar />
        <div data-depth=".3" className="intro-block">
          <div id="scene" data-hover-only="true" className="intro-focus-wrapper">
            <div className="intro-focus-flavor-wrapper" data-depth=".2">
              <div className="intro-focus-flavor">

              </div>
            </div>
            <div data-depth=".4" className="intro-announcement-wrapper">
              <h1 className="intro-announcement">
                Personal
                <br />
                Portfolio
              </h1>
            </div>
            <div data-depth=".25" className="intro-image-wrapper">
              {/* <img src='/assets/images/toriigate_ghostwhite.jpg' alt=''/> */}
            </div>
            <div data-depth="1">
              {/* <div className="flavor-lines">
                <p>///</p>
              </div> */}
            </div>
            <div id="scene2">
              {/* <div data-depth="2"  className=".flavor-pluses-wrapper">
                <ul className="flavor-pluses">
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>                  
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                </ul>
              </div> */}
            </div>
            {/* <div data-depth="10">
              <div className="flavor-triangle">
                ///&nbsp;Haha, ///&nbsp;caught ///&nbsp;you ///&nbsp;Playing ///&nbsp;with ///&nbsp;Parallax
              </div>
            </div> */}
          </div>
        </div>

        <section className="meet-me">
          <div className="accolades clearfix">
            <div className="roles">
              <h2 className="list-header">Roles</h2>
              <ul>
                <li>Client Support Coach</li>
                <li>Blacks In Tech Hackathon</li>
              </ul>
            </div>
            <div className="roles-awards-dates">
              <h2 className="list-header">Dates</h2>
              <ul>
                <li>12/16/2018</li>
                <li>09/09/2018</li>
              </ul>
            </div>
            <div className="awards">
              <h2 className="list-header">Awards</h2>
              <ul>
                <li>Rising Star</li>
                <li>Honerable Mention</li>
              </ul>
            </div>
          </div>
          <div className="introduction">
            <h2>I Build</h2>
            <p>
              You've found my portfolio! I'm Julius Dorfman. I engineer ambitious applications and design them with a minimalist aesthetic. 
              <br />
              <br />
              This website is where I publish my works; an expression of my creativity through design, code, and writing. This site will hold the bookmarks of my life in: projects, articles, and career history. While you're here, thank you for being a part of it.
              </p>
          </div>
        </section>

        <section className="grid-container-homepage">
        <div className="projects-intro-wrapper">
            <h1>Projects</h1>
          </div>

          <div className="proj1 column">
            <div className="project-intro">
              <small className="date">August 2018</small>
              <a href="https://hstone-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h1>hStone Addiction</h1>
              </a>
            </div>
            <div className="proj-flavor-text">
              <p>Quantify the sunk cost of your addiction. Then, go do something more productive. It's the future you would have wanted.</p>
            </div>
          </div>
          <div className="proj2 column">
            <div className="project-intro">
              <small className="date">July 2018</small>
              <a href="https://news-from.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h1>News-From</h1>
              </a>
            </div>
            <div className="proj-flavor-text">
              <p>Search the headlines of your beloved/loathed news organizations for celebrity/business/topic mentions.</p>
            </div>
          </div>
          <div className="proj3 column">
            <div className="project-intro">
              <small className="date">June 2018</small>
              <a href="https://juliusdorfman.github.io/imagEdits/" target="_blank" rel="noopener noreferrer">
                <h1>imagEdits</h1>
              </a>
            </div>
            <div className="proj-flavor-text">
              <p>This is a simple browser based image editor.</p>
            </div>
          </div>
          <div className="proj4 column">
            <div className="project-intro">
              <small className="date">March 2018</small>
              <a href="https://crystal-numbers.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h1>Crystal Game</h1>
              </a>
            </div>
            <div className="proj-flavor-text">
              <p>This is a "fun" browser based number addition game with a "fun" theme and very simple premise.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}