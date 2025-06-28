// components/About/About.jsx
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About EventsAtPrime</h1>
        <p className="about-intro">
          Welcome to <strong>EventsAtPrime</strong> – your one-stop platform for
          discovering exciting events, workshops, and programs hosted by Prime
          College and its vibrant student clubs.
        </p>

        <section className="about-section">
          <h2>🎯 Our Mission</h2>
          <p>
            To connect students, organizers, and communities through meaningful
            events that enhance learning, creativity, and collaboration.
          </p>
        </section>

        <section className="about-section">
          <h2>💡 What We Offer</h2>
          <ul>
            <li>📅 A centralized platform for all college events</li>
            <li>📝 Easy registration and participation</li>
            <li>📢 Event promotion tools for clubs & departments</li>
            <li>💼 Real-time updates and notifications</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>📍 Location</h2>
          <p>Prime College, Khusibu, Naya Bazar, Kathmandu, Nepal</p>
        </section>

        <section className="about-section contact-section">
          <h2>📬 Contact Us</h2>
          <p>
            For feedback or collaboration, email us at:{" "}
            <a href="mailto:events@primecollege.edu.np">
              events@primecollege.edu.np
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
