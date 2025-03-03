import React, { useState } from 'react';
import './Virtual-labs.css';

const b1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740943251/b1_ellruo.jpg';

const Virtuallabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabContent = {
    overview: {
      title: "Overview",
      content: "Virtual Labs, an Ministry of Education project under NMEICT, offers free remote laboratory learning experiences. Workshops and nodal centers support institute partnerships within the Virtual Labs consortium. The project, led by IIT Delhi and involving eleven institutes, provides over 190 Virtual Labs and 1600+ web-enabled experiments across various domains using open-source technologies. These simulations are accessible online without any additional infrastructure or fees."
    },
    goals: {
      title: "Goals and Philosophy",
      content: "To offer a remote learning experience with simulated experiments in diverse areas of Science and Engineering.To engage students by sparking their curiosity, allowing them to learn fundamental and complex concepts through remote experimentation.To present a complete Learning Management System around the Virtual Labs, where students and teachers can utilize various tools for learning, including supplemental web-resources, video-lectures, animated demonstrations, and self-evaluation.PhilosophyBridging the gap for colleges that lack lab facilities: Provide online labs as a substitute for hands-on lab work in engineering colleges that do not have the necessary equipment.Enhancing existing labs with online resources: Expand the capabilities of existing labs with online labs to complement and augment the learning experience of engineering students.Empowering educators through specialized workshops: Offer workshops on-site or online to enhance the skill set and proficiency of educators in the effective use of online labs in engineering education."
    },
    institutes: {
      title: "Participating Institutes",
      content: "We collaborate with leading institutions across the country to develop and maintain virtual laboratories."
    },
    testimonials: {
      title: "Testimonials",
      content: "Read what our users say about their Virtual Labs experience."
    },
    faq: {
      title: "FAQ",
      content: "Find answers to commonly asked questions about Virtual Labs."
    }
  };

  return (
    <div className="virtual-labs-container">
      <h1 className="virtual-labs-heading">Virtual Labs</h1>

      {/* Navigation Tabs */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab ${activeTab === 'goals' ? 'active' : ''}`}
          onClick={() => setActiveTab('goals')}
        >
          Goals and Philosophy
        </button>
        <button
          className={`tab ${activeTab === 'institutes' ? 'active' : ''}`}
          onClick={() => setActiveTab('institutes')}
        >
          Participating Institutes
        </button>
        <button
          className={`tab ${activeTab === 'testimonials' ? 'active' : ''}`}
          onClick={() => setActiveTab('testimonials')}
        >
          Testimonials
        </button>
        <button
          className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>{tabContent[activeTab].title}</h2>
        <div className="content">
          {tabContent[activeTab].content}
        </div>
      </div>

      {/* Stakeholders Section */}
      <div className="stakeholders-section">
        <h2>Stakeholders</h2>
        <div className="stakeholder-cards">
          {['Students', 'Faculty', 'Subject Matter Experts', 'Developers', 'Nodal Centre Community', 'Participating Institutes', 'Interns', 'Ministry of Education', 'Accreditation Bodies', 'Service Providers', 'Universities', 'Researchers'].map((stakeholder) => (
            <div key={stakeholder} className="stakeholder-card">
              <img src={b1} alt={stakeholder} className="stakeholder-image" />
              <h3>{stakeholder}</h3>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Address</h4>
            <p>
              Engineering and Architecture Division :
              <br />
              Room No:B5-203, Vindhya C6, VLEAD, IIIT-H,
              <br />
              Gachibowli, Hyderabad - 500032
            </p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              General Information : 011-64674687
              <br />
              Development/Outreach : +91-9177792945
              <br />
              Email: support@vlabs.ac.in
            </p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <p>© 2024 Virtual Labs IIT Hyderabad. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Virtuallabs;