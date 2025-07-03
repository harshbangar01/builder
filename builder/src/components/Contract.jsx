import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you</p>
      </section>

      {/* Contact Form + Details */}
      <section className="contact-content">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Address:</strong> 123 Main Street, City, State, ZIP</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> info@abcbuilders.com</p>

          <h3>Find Us Here:</h3>
          <div className="map-placeholder">
            {/* Embed Google Map iframe here */}
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
