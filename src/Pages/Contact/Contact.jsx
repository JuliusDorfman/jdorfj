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
            <h1>Contact Me</h1>
          </div>
          <div className="contact-form-body">
            <form id="contact-form">
            <h2>Drop Me A Line...</h2>
              <input id="name" name="name" type="text" placeholder="Name" autoComplete="new-password" />
              <input id="email" name="email" type="text" placeholder="Email" autoComplete="new-password" />
              <textarea id="message" name="message" type="textarea" placeholder="Say Hi!" autoComplete="new-password" />
            </form>
            <div className="contact-form-details">
              <h3>The Details</h3>
              <p className="my-dealings">
                Julius is a solo developer with a wide breadth of knowledge in all things web development. SEO, Visual Aesthetic, Edits by the Pixel, I've got you covered!
              </p>
              <ul>
                <li>e. juliusgcd@gmail.com</li>
                <li>w. jdorfj.herokuapp.com</li>
                <li>p. contact me for phone #</li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    )
  }
}