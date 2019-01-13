import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import "./Blog.css";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog-component">
        <Navbar />
        <section className="blog-layout">
          <article className="blog-article">
            <time dateTime="2019-13-01">Published 01-13-2019</time>
            <h1 className="blog-header">Engineering, Design, Piano, and Sketching</h1>
            <h3 className="blog-subheader">A struggle in focus.</h3>
            <p>After leaving a promising career in accounting to persue my passion for programming, I've become aware of various disciplines I'd love to explore. To restate <em>more accurately,</em> I've become atuned to areas of discipline that <em>I</em> would love to be an expert in. I attribute this to leaving a stable career and then finding myself in a prolonged state of anxiety as I rush to become proficient in an entirely new discipline. <em>Programming</em> and <em>Art</em> have always been in my periphery and never attempted, while <em>Music</em> has been a large part of my life. The fear of living the rest of my life whilst never having attempted to explore these disciplines became too great.
            </p>
            <br />
            <br />
            <div id="daunting-architecture-wrapper">
              <img id="daunting-architecture" src="/assets/images/daunting_architecture.jpg" alt="Daunting Architecture" />
              <figcaption>Thank you to Pavel Nekoranec - Unsplash</figcaption>
            </div>
            <br />
            <br />
            <p>

            </p>
          </article>
        </section>
      </div>
    )
  }
}
