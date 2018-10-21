import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import DigitalCard from '../../Components/DigitalCard';
import './Homepage.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="homepage-component">
        <Navbar />
        <div className="resume-intro">
          <div className="intro">
            <h1>
              Résumé
            </h1>
            <a href="#"><i class="far fa-file-pdf"></i></a>
          </div>
        </div>
        <div className="skills-container">
          <div className="skills-intro">
            <h1>Skills</h1>
          </div>
          <div className="skills-list">
            <div className="skills-zone">
              <div className="skills-head">My Toolbox</div>
              <div className="skills-details"></div>
            </div>
            <div className="skills-zone">
              <div className="skills-head"></div>
              <div className="skills-details"></div>
            </div>
            <div className="skills-zone">
              <div className="skills-head"></div>
              <div className="skills-details"></div>
            </div>
          </div>
        </div>
        <div className="resume-footer">
        </div>
        <DigitalCard />
      </div>
    )
  }
}
