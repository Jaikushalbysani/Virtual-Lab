import React from 'react';
import './Schedule.css';
const sch1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735378793/sch1_sqnms9.png';
const sch2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379078/sch2_yrmntm.png';

const Schedules = () => {
  return (
    <div className="schedules-container">
      <div className="sch">
      <img src={sch1} alt="sch1" className="sch1" />
      <img src={sch2} alt="sch2" className="sch2" />
      </div>
    </div>
  );
};

export default Schedules; 