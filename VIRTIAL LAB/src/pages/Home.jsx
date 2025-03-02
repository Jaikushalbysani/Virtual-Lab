import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Lenis from '@studio-freight/lenis';


const Home = () => {
  

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);



  return (
    
    <div className="home-container">
        <div id="cursor"></div>
        <div class="background"></div>
      <div className="spline">
        <spline-viewer url="https://prod.spline.design/4UjWcx5AakVFB4YG/scene.splinecode"></spline-viewer>
      </div>
      <div class="parent">
        <div class="watermark">
            <button>
                L E T ' S&nbsp;&nbsp;&nbsp;&nbsp; S T A R T
            </button>
        </div>
    </div>

      <div className="headline">
        <h1>Let's Explore, Experiment and Discover !</h1>
      </div>

      <div className="para">
        <p>The Virtual Labs Engineering, Architecture, and Design (VLEAD) Team at IIIT Hyderabad optimizes Virtual Labs operations, including infrastructure management, system administration, user interface design, process coordination, analytics, automation, performance, security enhancements, content authoring tool development, and technology research. Their efforts ensure efficiency and a seamless learning experience.</p>
      </div>
      
    </div>
  );
};

export default Home; 