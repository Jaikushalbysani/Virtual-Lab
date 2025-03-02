import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Login from './pages/Login';   
import Eventslist from './pages/Eventslist';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import Needs from './pages/Needs';
import ForgotPassword from './pages/ForgotPassword';
import Otherspayment from './pages/Otherspayment';
import Terms from './pages/Terms';
import Profile from './pages/Profile';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventslist" element={<Eventslist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/needs" element={<Needs />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otherspayment" element={<Otherspayment />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
