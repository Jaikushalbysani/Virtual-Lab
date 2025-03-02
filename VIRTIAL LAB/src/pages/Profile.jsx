import React from 'react';
import './Profile.css';
const profile = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1736087195/file_37_kyhcfe.png';
const underline = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/underline_ra5fgs.png';
const event = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380954/cmgsoon_bo9wmm.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="user-profile">
                <h2>User Profile</h2>
                <img src={profile} alt="" className="" />
                <p>Name: Jai kushal Bysani</p>
                <p>Email: jaikushalbysani@gmail.com</p>
                <p>Phone Number: +91 9999999999</p>
                <p>College ID: 524004521</p>
            </div>

            <div className="registered-events">
                <h2>Registered Events</h2>
                <img src={underline} alt="" className="undeline" />
                <div className="box">
            <div className="left">
              <h2>Beat Battle</h2>
              <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. </p>
              <div className="down">
                <div className="dright">
                  <h3>09 : 00 AM</h3>
                  <h3>25 | 02 | 2025</h3>
                  <h3>Venue : KL University</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={event} alt="event" className="event" />
            </div>
          </div>
            </div>
        </div>
    );
};

export default Profile;
