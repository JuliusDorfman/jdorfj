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
        <DigitalCard />
      </div>
    )
  }
}
