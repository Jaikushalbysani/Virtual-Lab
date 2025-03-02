import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const video1 = 'https://res.cloudinary.com/ds18h1q0k/video/upload/v1735379791/vid1_wltntt.mp4';
const video2 = 'https://res.cloudinary.com/ds18h1q0k/video/upload/v1735379794/surabhi2_ic7skj.mp4';
const y2024i =  'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379758/2024i_b6r9hy.jpg';
const y2023i = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379758/2023i_dp6r0u.jpg';
const y2022i = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380198/2022i_ihzcmw.jpg';
const blur = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379771/Rectangle_2_satwlt.png';
const l1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379768/l1_fbb59e.png';
const l2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379770/l2_jq04tj.png';
const l3 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379769/l3_kpm0f0.png';
const underline = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/underline_ra5fgs.png';
const g1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379767/g1_gth4yu.jpg';
const g2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379766/g2_nwtfyi.jpg';
const g3 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379765/g3_ccux51.jpg';
const g4 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380176/g4_be5vwm.jpg';
const g5 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379764/g5_kfp48m.jpg';
const g6 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379762/g6_qeve0t.jpg';
const g7 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/g7_sqofuv.jpg';
const g8 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379761/g8_zzrckr.jpg';
const g9 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/g9_dyrmfz.jpg';
const g10 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379760/g10_zneydh.jpg';
const g11 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379759/g11_yvh7me.jpg';
const y2024 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379757/2024_blyzpk.png';
const y2023 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379754/2022_r8jbik.png';
const y2022 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379754/2022_r8jbik.png';
const corg = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1736089836/fdvsd_ntnhjg.png';
const footer = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379767/footer_cvrjgz.png';
const footermob = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379750/footermob_cmzq0p.png';
import Lenis from '@studio-freight/lenis';



const Home = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-02-28T00:00:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      console.log('Difference:', difference);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      console.log('Days:', days, 'Hours:', hours, 'Minutes:', minutes, 'Seconds:', seconds);

      setCountdown({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="header">
      <video
          id="videos"
          src={video2}
          autoPlay
          muted
          loop
        />
      </div>

      <div className="headline">
        <h1>SURABHI <span>2025</span></h1>
      </div>

      <div className="blur">
        <img src={blur} alt="" className="blur" />
      </div>

      <div id="scroller">
        <div id="scroller-in">
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Enagage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Enagage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
        </div>
      </div>

    <div className="timer">
      <div className="countdown">
        <div className="time-block">
          <span className="time">{countdown.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>

      <div className="what1">
        <h1>What is Surabhi?</h1>
        <img src={underline} alt="" className="undeline" />
        <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment. This year, we are dedicated to overcoming past challenges to ensure an enriched experience for participants and attendees.</p>
      </div>


      <div className="video-container">
        <video
          id="videos"
          src={video1}
          autoPlay
          muted
          loop
        />
      </div>

      <div id="scroller1">
        <div id="scroller-in1">
          <h4>Let Us Celebrate Talent and Tradition Together!</h4>
          <h4>Let Us Celebrate Talent and Tradition Together!</h4>
          <h4>Let Us Celebrate Talent and Tradition Together!</h4>
        </div>
      </div>

      <div className="map">
        <div className="prt1">
          <img src={l1} alt="" className="l1" />
          <Link to="/eventslist">
          <button>Event List</button></Link>
          <p>Discover a wide range of exciting events curated for every interest. Browse through the complete list and find the perfect one for you.</p>
        </div>
        <div className="prt1">
          <img src={l2} alt="" className="l2" />
          <Link to="/register">
          <button>Event Registration</button></Link>
          <p>Easily sign up for the events you’re interested in. Secure your participation with just a few clicks and get ready to join the fun.</p>
        </div>
        <div className="prt1">
          <img src={l2} alt="" className="l2" />
          <Link to="/profile">
          <button>Registered Events</button></Link>
          <p>Keep track of all the events you’ve registered for. Manage your entries, view details, and make changes if needed.</p>
        </div>
        <div className="prt1">
          <img src={l2} alt="" className="l2" />
          <Link to="/schedule">
          <button>Events schedule</button></Link>
          <p>Stay informed about the dates, times, and venues of all upcoming events. Plan ahead to make sure you don’t miss out.</p>
        </div>
        <div className="prt1">
          <img src={l2} alt="" className="l2" />
          <Link to="/needs">
          <button>Events Needs</button></Link>
          <p>Familiarize yourself with the guidelines, rules, and requirements for each event to ensure a seamless and enjoyable experience.</p>
          <img src={l3} alt="" className="l3" />
        </div>
      </div>

    <div className="guests">
      <h1>Our Guests</h1>
      <img src={underline} alt="" className="undeline" />
      <div className="imgscroll">
      <img src={g1} alt="" className="g1" />
      <img src={g2} alt="" className="g1" />
      <img src={g3} alt="" className="g1" />
      <img src={g4} alt="" className="g1" />
      <img src={g5} alt="" className="g1" />
      <img src={g6} alt="" className="g1" />
      <img src={g7} alt="" className="g1" />
      <img src={g8} alt="" className="g1" />
      <img src={g9} alt="" className="g1" />
      <img src={g10} alt="" className="g1" />
      <img src={g11} alt="" className="g1" />
      </div>
      <img src={underline} alt="" className="undeline" />
    </div>

    

      <div className="what1">
        <h1>Why attend Surabhi?</h1>
        <img src={underline} alt="" className="undeline" />
        <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment. This year, we are dedicated to overcoming past challenges to ensure an enriched experience for participants and attendees.</p>
      </div>

      <div className="years">
        <div className="y2024">
          <img src={y2024} alt="" className="y2024" />
          <div className="y2024d">
            <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment.</p>
            <img src={y2024i} alt="" className="y2024i" />
          </div>

        </div>
        <div className="y2024">
          <img src={y2023} alt="" className="y2024" />
          <div className="y2024d">
            <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment.</p>
            <img src={y2023i} alt="" className="y2023i" />
          </div>

        </div>
        <div className="y2024">
          <img src={y2022} alt="" className="y2024" />
        <div className="y2024d">
            <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment.</p>
            <img src={y2022i} alt="" className="y2022i" />
          </div>

          <div className="what1">
        <h1>Assosiated Partners</h1>
        <img src={underline} alt="" className="head" />
        <div className="comps">
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
          <div className="comp">
            <img src={corg} alt="" className="" />
          </div>
        </div>  
      </div>

        </div>
      </div>

      <div className="footer">
        <img src={footer} alt="" className="footer" />
      </div>
      <div className="footermob">
      <img src={footermob} alt="" className="footermob" />
      </div>
    </div>
  );
};

export default Home; 