// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About

import React from "react";
import "./About.css";

function About() {
  return (
    <main className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <h1>About Builders</h1>
        <p>Building trust, one brick at a time.</p>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <h2>Our Story</h2>
        <p>
          Established in 2000, ABC Builders has transformed the real estate
          landscape with its commitment to quality, innovation, and customer
          satisfaction. From luxury residences to modern commercial spaces, we
          take pride in delivering projects that stand the test of time.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To create sustainable and affordable living spaces that enhance the
            quality of life for our customers and contribute to the development
            of the community.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be a trusted name in the real estate industry by setting new
            benchmarks in design, quality, and customer service.
          </p>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvsKTbiCDTiNEJI2pY_ZsmZjUInMknkgz_w&s" alt="CEO" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/1346124841/photo/successful-construction-site-worker-thinking.jpg?s=612x612&w=0&k=20&c=nIOAGsr7yd2h-0XNLqY8lFRFsbAqKl411VVQn86G3fI=" alt="CTO" />
            <h3>Jane Smith</h3>
            <p>Chief Technical Officer</p>
          </div>
          <div className="team-member">
            <img src="https://img.freepik.com/premium-photo/construction-builder-manager-supervisor-construction-site-portrait-construction-manager_265223-119475.jpg" alt="Manager" />
            <h3>Michael Brown</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
