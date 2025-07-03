import React from "react";
import "./Home.css";

const Home = () =>{
  return (
    <main className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Builder</h1>
          <p>We build your dreams into reality</p>
          <a href="/Project" className="button2">Explore Projects</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          ABC Builders is a leading real estate developer with 20+ years of
          experience in creating modern and sustainable living spaces.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Our Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <img src="https://cdn.furnishedhousing.com/property-images/5109917_R.jpg" alt="Project 1" />
            <h3>Skyline Residency</h3>
            <p>Luxury apartments in the heart of the city.</p>
          </div>
          <div className="project-card">
            <img src="https://resource.rentcafe.com/image/upload/q_auto,f_auto/s3/2/143212/_dsc3947(1).jpg" alt="Project 2" />
            <h3>Green Villas</h3>
            <p>Eco-friendly villas surrounded by nature.</p>
          </div>
          <div className="project-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-UEnmx7_-OGDLiN2fq380iHNrh94x57eyw&s" alt="Project 3" />
            <h3>Urban Heights</h3>
            <p>Modern commercial and residential spaces.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to start your journey with us?</h2>
        <a href="/Contact" className="button">Contact Us</a>
      </section>
    </main>
  );
}

export default Home;
