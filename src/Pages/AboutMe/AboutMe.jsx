import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import './AboutMe.css';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="Aboutme-component">
        <Navbar />
        About Me
      </div>
    )
  }
}