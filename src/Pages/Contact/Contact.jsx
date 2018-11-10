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
        <div className="contact-form-wrapper">
          <div className="card-title">
            <h1>Contact<span /></h1> &nbsp; <br />
            <h1>Me<span /></h1>
          </div>
          <form id="contact-form">
            <input id="name" name="name" type="text" placeholder="Name" autoComplete="new-password" />
            <div className="underline-input"> </div>
            <input id="email" name="email" type="text" placeholder="Email" autoComplete="new-password" />
            <div className="underline-input"></div>
            <textarea id="message" name="message" type="textarea" placeholder="Say Hi!" autoComplete="new-password" />
            <div className="underline-input"></div>
          </form>
        </div>
      </div >
    )
  }
}