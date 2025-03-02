import React from 'react'
import './Vlead.css'

const Vlead = () => {
  return (
    <div className="vlead-container">
      <h1>Virtual Labs Engineering & Architecture Division</h1>
      <div className="vlead-content">
        <section className="about-section">
          <h2>About VLEAD</h2>
          <p>
            VLEAD (Virtual Labs Engineering & Architecture Division) is responsible 
            for the development, deployment, and maintenance of virtual labs infrastructure. 
            We work on creating scalable and sustainable virtual lab solutions.
          </p>
        </section>

        <section className="responsibilities-section">
          <h2>Our Responsibilities</h2>
          <div className="responsibilities-grid">
            <div className="responsibility-card">
              <h3>Development</h3>
              <p>Creating and maintaining virtual lab platforms</p>
            </div>
            <div className="responsibility-card">
              <h3>Architecture</h3>
              <p>Designing scalable systems for virtual labs</p>
            </div>
            <div className="responsibility-card">
              <h3>Support</h3>
              <p>Providing technical assistance to lab developers</p>
            </div>
            <div className="responsibility-card">
              <h3>Innovation</h3>
              <p>Implementing new technologies and methodologies</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Vlead
