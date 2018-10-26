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
            <a href="#"><i className="far fa-file-pdf"></i></a>
          </div>
        </div>
        <section className="skills-container">
          <div className="skills-intro">
            <h1>Skills</h1>
          </div>
          <ul className="skill-list">
            <li className="skill-item">
              <div className="skills-head">Development</div>
              <div className="skills-details">
                <ul>
                  <li>Lorem ipsum dolor sr adipisicing elit. Omnis autem </li>
                  <li>cumque adwdadws vitaee?</li>
                  <li> doloribus repros ist</li>
                  <li>Lorem ipsum dolor sr adipisicing elit. Omnis autem </li>
                </ul>
              </div>
            </li>
            <li className="skill-item">
              <div className="skills-head">UX</div>
              <div className="skills-details">
                <ul>
                  <li>Lorem ipsum dolor sr adipisicing elit. Omnis autem </li>
                  <li>cumque adwdadws vitaee?</li>
                  <li> doloribus repros ist</li>
                  <li>Lorem ipsum dolor sr adipisicing elit. Omnis autem </li>
                </ul>
              </div>
            </li>
            <li className="skill-item">
              <div className="skills-head">DevOps</div>
              <div className="skills-details">
                <ul>
                  <li>Lorem ipsum dolor sr adipisicing elit. Omnis autem </li>
                  <li>cumque adwdadws vitaee?</li>
                  <li> doloribus repros ist</li>
                  <li>Lorem ipsum dolor sr adipisicing elit. Omnis autem </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <div className="resume-footer">
        </div>
        <DigitalCard />
      </div>
    )
  }
}
