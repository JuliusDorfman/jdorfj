import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
// import DigitalCard from '../../Components/DigitalCard';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: 1,
      name: "",
      email: "",
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ [e.target.value]: e.target.value }, () => {
      console.log("handleSubmit", this.state);
      this.setState({ render: 0 });
    }
    );
  }

  render() {


    return (
      <div className="contact-component">
        <Navbar />
        <div className="contact-form-wrapper">
          <div className="card-title">
            <h1>Contact Me</h1>
          </div>
          <div className="contact-form-body">
            {(this.state.render) ? (
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <h2>Drop Me A Line...</h2>

                <input id="name" name="name" type="text" placeholder="*Name" autoComplete="new-password" value={this.state.name} onChange={this.handleChange} required />

                <input id="email" name="email" type="email" placeholder="*Email" autoComplete="new-password" value={this.state.email} onChange={this.handleChange} required />

                <textarea id="message" name="message" type="textarea" placeholder="*Say Hi!" autoComplete="new-password" value={this.state.message} onChange={this.handleChange} required />

                <input className="submit" type="submit" value="- Fire Away -" href="mailto: juliusgcd@gmail.com" />
              </form>
            )
              :
              (<div className="thank-you-submit">
                Thank you!
                <br />
                Please expect to hear from me within the day!
              </div>
              )}
            <div className="contact-form-details">
              <h3>The Details</h3>
              <p className="my-dealings">
                Julius is a solo developer with a wide breadth of knowledge in all things web development. SEO, visual aesthetic, edits by the pixel, I've got you covered!
                </p>
              <ul>
                <li>e. juliusgcd@gmail.com</li>
                <li>w. jdorfj.herokuapp.com</li>
                <li>p. use the contact form on this page for my digits</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-footer">
            <ul>
              <li>I will publish a website you can resonate with</li>
            </ul>
          </div>
          {/* <DigitalCard /> */}

        </div>
      </div>
    )
  }
}