import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
// import DigitalCard from '../../Components/DigitalCard';
// import './Homepage.css';
import './Homepage.css';

export default class Homepage extends Component {

  render() {
    return (
      <div className="homepage-component">
        <Navbar />

        <span className="temp-position">
          <h1 className="experience-header">
            EXPERIENCE
        </h1>

          <div className="experience-row">
            <section className="experience-container resume-container">

              <div id="imatrix" className="exp-first-tier">
                <article className="exp-item">
                  <header>
                    <h4>September 2018 &nbsp; - &nbsp; Current</h4>
                    <h4>San Diego, CA</h4>
                    <h4>Support Coach</h4>
                    <h4>iMatrix</h4>
                  </header>
                  <p>My first technical position in the field! I began at iMatrix as a Support Coach. My role was to assist clients with website management. My patrons were not technically savvy and I became an expert in explaining the field, both verbal and written on topics that included: Aesthetic, SEO, Domains, Photoshop.
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
          </div>

          <h1 className="skills-header">
            SKILLS
        </h1>

          <div className="skills-row">
            <section className="skills-container resume-container">
              <ul className="skill-list">
                <li className="skill-item">
                  <div className="skills-head">
                    <h2>Development</h2>
                  </div>
                  <div className="skills-details">
                    <ul>
                      <span>
                        <li className="colors">html5 &amp; css3 </li>
                        <li className="colors">javascript (es6)</li>
                      </span>
                      <span>
                        <li className="colors">jquery</li>
                        <li className="colors">react</li>
                      </span>
                    </ul>
                  </div>
                </li>
                <li className="skill-item">
                  <div className="skills-head">
                    <h2>UX</h2>
                  </div>
                  <div className="skills-details">
                    <ul>
                      <span>
                        <li className="colors">accessibility</li>
                        <li className="colors">user workflows</li>
                      </span>
                      <span>
                        <li className="colors">wire framing</li>
                        <li className="colors">client empathy</li>
                      </span>
                    </ul>
                  </div>
                </li>
                <li className="skill-item">
                  <div className="skills-head">
                    <h2>DevOps</h2>
                  </div>
                  <div className="skills-details">
                    <ul>
                      <span>
                        <li className="colors">big picture project awareness</li>
                        <li className="colors">cloud services</li>
                      </span>
                      <span>
                        <li className="colors">testing</li>
                        <li className="colors">version control</li>
                      </span>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>


          </div>
        </span>
      </div>
    )
  }
}
