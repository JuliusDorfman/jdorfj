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
                <img src="/assets/images/development-icon-inverted.png" alt="Development Icon" />
                <p>Development</p>
              </div>
              <div className="skills-details">
                <ul>
                  <li>html5 &amp; css3 </li>
                  <li>javascript (es6)</li>
                  <li>jquery</li>
                  <li>react</li>
                </ul>
              </div>
            </li>
            <li className="skill-item">
              <div className="skills-head">
                <img src='https://dummyimage.com/1080x1200.gif?text=Placeholder' alt='placeholder image' />
                <p>UX</p>
              </div>
              <div className="skills-details">
                <ul>
                  <li>accessibility</li>
                  <li>user workflows</li>
                  <li>wire framing</li>
                  <li>client empathy</li>
                </ul>
              </div>
            </li>
            <li className="skill-item">
              <div className="skills-head">
                <img src='https://dummyimage.com/1080x1200.gif?text=Placeholder' alt='placeholder image' />
                <p>DevOps</p></div>
              <div className="skills-details">
                <ul>
                  <li>version control</li>
                  <li>cloud services</li>
                  <li>testing</li>
                  <li>big picture project awareness</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <section className="experience-container">
          <h1>
            Experience
          </h1>
          <div className="exp-first-tier">
            <article className="exp-item">
              <header>
                <h4>September 2018 &nbsp; - &nbsp; Current</h4>
                <h4>San Diego, CA</h4>
                <h4>Support Coach</h4>
                <h4>iMatrix</h4>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio </p>
            </article>
          </div>
          <div className="exp-first-tier">
            <article className="exp-item">
              <header>
                <h4>June 2017 &nbsp; - &nbsp; February 2018</h4>
                <h4>University of California, San Diego</h4>
                <h4>Student</h4>
                <h4>Full Stack Bootcamp</h4>
              </header>
              <p>Extensive 6-month program dedicated to front and back-end web-development. Mastery includes: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Firebase, NodeJS, MySQL, MongoDB, Express, HandlebarsJS, &amp; ReactJS.</p>
            </article>
          </div>
          <div className="exp-first-tier">
            <article className="exp-item">
              <header>
                <h4>March 2018 &nbsp; - &nbsp; September 2017</h4>
                <h4>San Diego, CA</h4>
                <h4>Staff Accountant</h4>
                <h4>Alliant Insurance Services, Inc.</h4>
              </header>
              <ul>
                <li>Lead team of 3-4 Accounts Receivable clerks.</li>
                <li>Oversee recognition of revenue, quarterly and yearly up to $1million.</li>
                <li>Reconcile company revenue accounts and bank accounts.</li>
              </ul>
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
