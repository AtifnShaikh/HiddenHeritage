import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Stories from './pages/Stories';
import GetInvolvedPage from './pages/GetInvoved';
import CulturalMapPage from './pages/CulturalMap';
import ContactPage from './pages/Contact';  

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/cultural-map" element={<CulturalMapPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;