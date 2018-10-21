import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-component">
        <Navbar />
        <section className="grid-container-homepage">
          <div className="directional-left">
            <div className="horizontal-flip-container">
              {/* <button className="horizontal-flip-left"></button> */}
            </div>
          </div>
          <div className="proj1 column">
            <div className="project-intro">
              <small className="date">August 2018</small>
              <a href="https://hstone-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h1>hStone Addiction</h1>
              </a>
              <p>Quantify the sunk cost of your addiction. Then go do something more productive. It's what future you would have wanted.</p>
            </div>
            <div className="vertical-flip-container">
              {/* <button className="vertical-flip flip1"></button> */}
            </div>
          </div>
          <div className="proj2 column">
            <div className="project-intro">
              <small className="date">July 2018</small>
              <a href="https://news-from.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h1>News-From</h1>
              </a>
              <p>Search the headlines of your beloved/loathed news organizations for celebrity/business/topic mentions.</p>
            </div>
            <div className="vertical-flip-container">
              {/* <button className="vertical-flip flip2"></button> */}
            </div>
          </div>
          <div className="proj3 column">
            <div className="project-intro">
              <small className="date">June 2018</small>
              <a href="https://juliusdorfman.github.io/imagEdits/" target="_blank" rel="noopener noreferrer">
                <h1>imagEdits</h1>
              </a>
              <p>This is a simple browser based image editor.</p>
            </div>
            <div className="vertical-flip-container">
              {/* <button className="vertical-flip flip3"></button> */}
            </div>
          </div>
          <div className="proj4 column">
            <div className="project-intro">
              <small className="date">March 2018</small>
              <a href="https://crystal-numbers.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h1>Crystal Game</h1>
              </a>
              <p>This is a "fun" browser based number addition game with a "fun" theme and very simple premise.</p>
            </div>
            <div className="vertical-flip-container">
              {/* <button className="vertical-flip flip4"></button> */}
            </div>
          </div>
          <div className="directional-right">
            <div className="horizontal-flip-container">
              {/* <button className="horizontal-flip horizontal-flip-right"></button> */}
            </div>
          </div>
        </section>
      </div>
    ) 
  } 
}