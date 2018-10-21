import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() { }

  render() {
    return (
      <div className="contact-component">
        <Navbar />
      </div>
    )
  }
}