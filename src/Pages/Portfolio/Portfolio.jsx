import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import DigitalCard from '../../Components/DigitalCard';
// import Parallax from 'parallax-js';
import './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: {}
    }
  }

  // componentDidMount() {
  //   var scene = document.getElementById('scene');
  //   new Parallax(scene);

  //   var scene2 = document.getElementById('scene2');
  //   new Parallax(scene2);
  // }



  render() {

    return (
      <div className="portfolio-component">
        <Navbar />
        <main>
          <section className="big-intro">

            <div>
              <p>Julius G. Dorfman</p>
              <p className="blue-text">Software Developer</p>
            </div>
            <div className='tagline blue-text'>
              <p>I build, design, and enhance applications.</p>
            </div>

          </section>
          <section className="small-intro">
            <div className="small-intro-content">
              <div id="wrapD3Cube">
                <div id="D3Cube">
                  <div id="side1"></div>
                  <div id="side2"></div>
                  <div id="side3"></div>
                  <div id="side4"></div>
                  <div id="side5"></div>
                  <div id="side6"></div>
                </div>
              </div>
            </div>
            <ul className="small-intro-flavor">
              <li className="menu-item right">
                <span className='menu-indicators'>></span>
                <p><a href='#about-me'>About Me</a></p>
              </li>
              <li className="menu-item right">
                <span className='menu-indicators'>></span>
                <p><a href='#projects'>Projects</a></p>
              </li>
              <li className="menu-item right">
                <span className='menu-indicators'>></span>
                <p><a href='mailto:juliusdorfman@gmail.com'>Let's Chat</a></p>
              </li>
            </ul>
          </section>
          {/* <DigitalCard /> */}
        </main>


        {/* <div data-depth=".3" className="intro-block">
          <div id="scene" className="intro-focus-wrapper">
            <div className="intro-focus-flavor-wrapper" data-depth=".2">
              <div className="intro-focus-flavor">

              </div>
            </div>
            <div data-depth=".4" className="intro-announcement-wrapper">
              <h1 className="intro-announcement">
                About Me
                <br />
              </h1>
            </div>
            <div data-depth=".25" className="intro-image-wrapper">
            </div>
            <div data-depth="1">

            </div>
            <div id="scene2">

            </div>

          </div>
        </div> */}

        <section id="about-me" className="meet-me">
          {/* <div className="accolades clearfix">
            <div className="awards">
              <h2 className="list-header">Awards</h2>
              <ul>
                <li>Perfect Net Promoter Score</li>
                <li>Rising Star</li>
                <li>Honerable Mention</li>
              </ul>
            </div>
            <div className="roles-awards-dates">
              <h2 className="list-header">Dates</h2>
              <ul>
                <li>03/24/2019</li>
                <li>12/16/2018</li>
                <li>09/09/2018</li>
              </ul>
            </div>
            <div className="roles">
              <h2 className="list-header">Roles</h2>
              <ul>
                <li>Client Support Coach</li>
                <li>Client Support Coach</li>
                <li>Blacks In Tech Hackathon</li>
              </ul>
            </div>
          </div> */}
          <div className="introduction">
            <h2>About Me</h2>
            <p>
              You've found my portfolio! I'm Julius Dorfman. I engineer ambitious applications and design them with a minimalist aesthetic.
              <br />
              <br />
              This website is where I publish my works; an expression of my creativity through design, code, and writing. This site will hold the bookmarks of my life in: projects, articles, and career history. While you're here, thank you for being a part of it.
              </p>
          </div>
        </section>

        {/* <div className="mid-page-fullwidth">
        </div> */}

        <section id="projects" className="projects">
          <div className="new-projects-intro-wrapper">
            <h1>Projects</h1>
          </div>
          <div className="new-grid-container-homepage">
            <div className="new-proj-twitrewriter ind-proj">
              <div className="new-project-intro">
                {/* <small className="new-date">August 2018</small> */}
                <a href="https://rewritertwit.herokuapp.com/Home" target="_blank" rel="noopener noreferrer">
                  <h1>Rewriter, Twit</h1>
                </a>
              </div>
              <div className="new-proj-flavor-text">
                <p>A novel Twitter bot that rewrites unsuspecting users' tweets.</p>
              </div>
              <a href="https://rewritertwit.herokuapp.com/Home" target="_blank" rel="noopener noreferrer">
                <div className="overlay-plus">
                  <div className="overlay-text">
                    <p className="text-italics">Twitter Bot</p>
                    <hr />
                    <p></p>
                  </div>
                </div>
              </a>
              <img className="plus-icon" src="/assets/images/juliusdorfman_plus_icon.png" alt="plus-icon" />
            </div>
            <div className="new-proj-hstone ind-proj">
              <div className="new-project-intro">
                {/* <small className="new-date">August 2018</small> */}
                <a href="https://hstone-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <h1>hStone Addiction</h1>
                </a>
              </div>
              <div className="new-proj-flavor-text">
                <p>Quantify the sunk cost of your addiction. Then, go do something more productive. It's the future you would have wanted.</p>
              </div>
              <a href="https://hstone-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="overlay-plus">
                  <div className="overlay-text">
                    <p className="text-italics">Web Application</p>
                    <hr />
                    <p></p>
                  </div>
                </div>
              </a>
              <img className="plus-icon" src="/assets/images/juliusdorfman_plus_icon.png" alt="plus-icon" />
            </div>
            <div className="new-proj-news-from ind-proj">
              <div className="new-project-intro">
                {/* <small className="new-date">July 2018</small> */}
                <a href="https://news-from.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <h1>News-From</h1>
                </a>
              </div>
              <div className="new-proj-flavor-text">
                <p>Search the headlines of your beloved/loathed news organizations for celebrity/business/topic mentions.</p>
              </div>
              <a href="https://news-from.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="overlay-plus">
                  <div className="overlay-text">
                    <p className="text-italics">Web Application</p>
                    <hr />
                    <p></p>
                  </div>
                </div>
              </a>
              <img className="plus-icon" src="/assets/images/juliusdorfman_plus_icon.png" alt="plus-icon" />
            </div>
            <div className="new-proj-imagedits ind-proj">
              <div className="new-project-intro">
                {/* <small className="new-date">June 2018</small> */}
                <a href="https://juliusdorfman.github.io/imagEdits/" target="_blank" rel="noopener noreferrer">
                  <h1>imagEdits</h1>
                </a>
              </div>
              <div className="new-proj-flavor-text">
                <p>This is a simple browser based image editor.</p>
              </div>
              <a href="https://juliusdorfman.github.io/imagEdits/" target="_blank" rel="noopener noreferrer">
                <div className="overlay-plus">
                  <div className="overlay-text">
                    <p className="text-italics">Web Application</p>
                    <hr />
                    <p></p>
                  </div>
                </div>
              </a>
              <img className="plus-icon" src="./assets/images/juliusdorfman_plus_icon.png" alt="plus-icon" />
            </div>
            {/* <div className="new-proj-crystal-game ind-proj">
              <div className="new-project-intro">
                <small className="new-date">March 2018</small>
                <a href="https://crystal-numbers.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <h1>Crystal Game</h1>
                </a>
              </div>
              <div className="new-proj-flavor-text">
                <p>This is a "fun" browser based number addition game with a "fun" theme and very simple premise.</p>
              </div>
              <a href="https://crystal-numbers.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="overlay-plus">
                  <div className="overlay-text">
                    <p>Passion Project</p>
                    <hr />
                    <p className="text-italics">Web Application</p>
                  </div>
                </div>
              </a>
              <img className="plus-icon" src="/assets/images/juliusdorfman_plus_icon.png" alt="plus-icon" />
            </div> */}
            {/* <div className="experience-link-wrapper">
              <a href="/homepage">
                <h4 className="new-experience-page-prompt">See My Experience and Work History</h4>
              </a>
            </div> */}
          </div>
        </section>
        {/* 
        <section className="grid-container-homepage">
          <div className="projects-intro-wrapper">
            <h1>Projects</h1>
          </div>
          <div className="proj-hstone column">
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
          <div className="proj-news-from column">
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
          <div className="proj-imagedits column">
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
          <div className="proj-crystal-game column">
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
          <a href="/homepage">
            <h4 className="experience-page-prompt">See My Experience and Work History</h4>
          </a>
        </section> */}
        <Footer />
      </div >
    )
  }
}