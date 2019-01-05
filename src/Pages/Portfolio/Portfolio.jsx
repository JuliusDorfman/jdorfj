import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Parallax from 'parallax-js';
import './Portfolio.css';

export default class Portfolio extends Component {

  componentDidMount() {
    var scene = document.getElementById('scene');
    new Parallax(scene);


  }

  render() {
    return (
      <div className="portfolio-component">
        <Navbar />
        <div data-depth=".3" className="intro-block">
          <div id="scene" className="intro-focus-wrapper">
            <div className="intro-focus" data-depth=".2">
            </div>
            <div data-depth=".4">
              <h1 className="intro-announcement">
                Personal
                <br />
                Portfolio
              </h1>
            </div>
            <div className="flavor-circle" data-depth=".4">

            </div>
          </div>
        </div>

        <section className="meet-me">
          <div className="accolades clearfix">
            <div className="roles">
              <h2 className="list-header">Roles</h2>
              <ul>
                <li>Client Support Coach</li>
              </ul>
            </div>
            <div className="roles-awards-dates">
              <h2 className="list-header">Dates</h2>
              <ul>
                <li>12/16/2018</li>
              </ul>
            </div>
            <div className="awards">
              <h2 className="list-header">Awards</h2>
              <ul>
                <li>Rising Star</li>
              </ul>
            </div>
          </div>
          <div className="introduction">
            <h2>I Build</h2>
            <p>
              Hello. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad blanditiis odit exercitationem quis vel ipsa cumque, facilis culpa recusandae perspiciatis nobis ea doloremque? Aut harum atque fugiat excepturi fugit!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio nesciunt tempora ullam dolorum autem assumenda sint! Quo officia, doloribus magni accusantium vel ipsa provident numquam iste reiciendis id quasi?</p>
          </div>
        </section>

        <section className="grid-container-homepage">
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
      </div>
    )
  }
}