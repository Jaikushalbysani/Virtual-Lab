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
import HostWorkshop from './pages/HostWorkshop'; // Import the HostWorkshop component
import CreateExperiment from './pages/CreateExperiment'; // Import the CreateExperiment component
import StartLearning from './pages/StartLearning'; // Import the StartLearning component
import ExploreResearch from './pages/ExploreResearch'; // Import the ExploreResearch component
import Learner from './pages/Learner'; // Import the Learner component

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
          <Route path="/host-workshop" element={<HostWorkshop />} /> {/* Add the route for HostWorkshop */}
          <Route path="/create-experiment" element={<CreateExperiment />} /> {/* Add the route for CreateExperiment */}
          <Route path="/start-learning" element={<StartLearning />} /> {/* Add the route for StartLearning */}
          <Route path="/explore-research" element={<ExploreResearch />} /> {/* Add the route for ExploreResearch */}
          <Route path="/learner" element={<Learner />} /> {/* Add the route for Learner */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
