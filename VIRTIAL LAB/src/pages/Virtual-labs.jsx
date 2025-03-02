import React, { useState } from 'react'
import "./Virtual-labs.css"

const Virtuallabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabContent = {
    overview: {
      title: "Overview",
      content: "Virtual Labs, an Ministry of Education project under NMEICT, offers free remote laboratory learning experiences. Workshops and nodal centers support institute partnerships within the Virtual Labs consortium. The project, led by IIT Delhi and involving eleven institutes, provides over 190 Virtual Labs and 1600+ web-enabled experiments across various domains using open-source technologies. These simulations are accessible online without any additional infrastructure or fees."
    },
    goals: {
      title: "Goals and Philosophy",
      content: "Our goals include making quality laboratory education accessible to all students, promoting experimental learning, and fostering innovation through technology."
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
      <h1>Virtual Labs</h1>
      
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
          {['Students', 'Faculty', 'Subject Matter Experts', 'Developers', 'Nodal Centre Community', 'Participating Institutes'].map((stakeholder) => (
            <div key={stakeholder} className="stakeholder-card">
              <h3>{stakeholder}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Virtuallabs
