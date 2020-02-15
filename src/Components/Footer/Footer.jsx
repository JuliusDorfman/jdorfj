import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-component">
        <div className="thank-you">
          {/* <h2>
            THANK YOU!
        </h2>
          <p>...for the time and effort you've spent browsing through my projects. <br /> <br /> If you've found something you've liked, please feel free to let me know!</p>
          */}
        <div className="copywrite">&copy; 2019 Julius G. Dorfman</div>

        </div>
        {/* <p className="footer-signature">
         - Julius G. Dorfman
        </p>  */}
      </div>
    )
  }
}
