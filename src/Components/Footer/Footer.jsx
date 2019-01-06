import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-component">
        <div className="thank-you">
          <h2>
            THANK YOU!
        </h2>
          <p>For the time and effort you've spent browsing through my projects. <br /> If you've found something you've liked, please feel free to spread the word!</p>
        </div>
        <div className="footer-copyright">
         - Julius G. Dorfman
        </div>
      </div>
    )
  }
}
