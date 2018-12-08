import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
// import DigitalCard from '../../Components/DigitalCard';
// import './Homepage.css';
import './Homepage_New.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeIntro: 0,
      experience: 1,
      skills: 0
    }
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  componentDidMount() {
    if (window.location.pathname.toLowerCase === "homepage" || "homepage#") {
      document.getElementsByClassName('navbar-component')[0].style.background = "ghostwhite";
    }
  }

  handleNavigate(e) {
    e.preventDefault();
    if (e.target.getAttribute('value') === "experience") {
      this.setState({ resumeIntro: 0 });
      this.setState({ experience: 1 });
      this.setState({ skills: 0 });
    }
    if (e.target.getAttribute('value') === "skills") {
      this.setState({ resumeIntro: 0 });
      this.setState({ experience: 0 });
      this.setState({ skills: 1 });
    }
  }

  render() {
    let resumeComponent;
    let jumpMenu = (
      <ul className="resume-jump-menu">
        <li>
          <p onClick={this.handleNavigate} value="experience">Experience</p>
        </li>
        <li>
          <p onClick={this.handleNavigate} value="skills">Skills</p>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1ZbzSmXuALwGpeg-Q3dKr6_nORTJO9zYK88fklaZUjE0/export?format=pdf">Download Professional Ver.&nbsp;<i className="fas fa-download"></i></a>
        </li>
      </ul>
    )
    return (
      <div className="homepage-component">
        <Navbar />


        <h1 className="experience-header">
          EXPERIENCE
        </h1>

        <div className="experience-row">

          <section className="experience-flavor">
          </section>

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
                  <img src='/assets/images/ux.svg' alt='placeholder' />
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
                  <img src='/assets/images/devops.svg' alt='placeholder' />
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
          <section className="skills-flavor">
          </section>

        </div>
        {/* <DigitalCard /> */}
      </div>
    )
  }
}
