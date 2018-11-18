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
              <div className="skills-head">
                <img src="/assets/images/development.svg" alt="Development Icon" />
                <p>Development</p>
              </div>
              <div className="skills-details">
                <ul>
                  <li className="colors1">html5 &amp; css3 </li>
                  <li className="colors2">javascript (es6)</li>
                  <li className="colors3">jquery</li>
                  <li className="colors4">react</li>
                </ul>
              </div>
            </li>
            <li className="skill-item">
              <div className="skills-head">
                <img src='/assets/images/ux.svg' alt='placeholder image' />
                <p>UX</p>
              </div>
              <div className="skills-details">
                <ul>
                  <li className="colors2">accessibility</li>
                  <li className="colors1">user workflows</li>
                  <li className="colors4">wire framing</li>
                  <li className="colors3">client empathy</li>
                </ul>
              </div>
            </li>
            <li className="skill-item">
              <div className="skills-head">
                <img src='/assets/images/devops.svg' alt='placeholder image' />
                <p>DevOps</p></div>
              <div className="skills-details">
                <ul>
                  <li className="colors4">version control</li>
                  <li className="colors3">cloud services</li>
                  <li className="colors2">testing</li>
                  <li className="colors1">big picture project awareness</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <section className="experience-container">
          <h1>
            Experience
          </h1>
          <div id="imatrix" className="exp-first-tier">
            <article className="exp-item">
              <header>
                <h4>September 2018 &nbsp; - &nbsp; Current</h4>
                <h4>San Diego, CA</h4>
                <h4>Support Coach</h4>
                <h4>iMatrix</h4>
              </header>
              <p>My first technical position in the field! I began at iMatrix as a Support Coach. My role was to assist clients with website management. My patrons were not technically savvy and I became an expert in explaining the field, both verbal and written. Essence of calls would include:
                <ul>
                  <li>Aesthetics</li>
                  <li>SEO</li>
                  <li>Domains</li>
                  <li>Photoshop</li>
                </ul>
              </p>
            </article>
          </div>
          <div id="trilogy-bootcamp" className="exp-first-tier">
            <article className="exp-item">
              <header>
                <h4>June 2017 &nbsp; - &nbsp; February 2018</h4>
                <h4>University of California, San Diego</h4>
                <h4>Student</h4>
                <h4>Full Stack Bootcamp</h4>
              </header>
              <p>I enrolled at UCSD for an extensive 6-month program dedicated to front and back-end web-development. Mastery includes: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Firebase, NodeJS, MySQL, MongoDB, Express, HandlebarsJS, &amp; ReactJS. This class was my first tangible step towards a career in web development.</p>
            </article>
          </div>
          <div id="alliant" className="exp-first-tier">
            <article className="exp-item">
              <header>
                <h4>March 2018 &nbsp; - &nbsp; September 2017</h4>
                <h4>San Diego, CA</h4>
                <h4>Staff Accountant</h4>
                <h4>Alliant Insurance Services, Inc.</h4>
              </header>
              <p>Before persuing a career in tech, I had worked as a Staff Accountant for a fantastic company, Alliant Insurance Services. While I enjoyed the people and the work, I knew the field was not where my passion lay.</p>
            </article>
          </div>
        </section>

        <div className="seperator">

        </div>

        <DigitalCard />
      </div>
    )
  }
}
