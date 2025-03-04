import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Iam from './pages/Iam';
import Iwanto from './pages/Iwanto';
import Analytics from './pages/Analytics';
import Virtuallabs from './pages/Virtual-labs';
import Vlead from './pages/Vlead';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Iam />} />
          <Route path="/login" element={<Iwanto />} />
          <Route path="/eventslist" element={<Analytics />} />
          <Route path="/Virtual-labs" element={<Virtuallabs />} />
          <Route path="/Vlead" element={<Vlead />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;