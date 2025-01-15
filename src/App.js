import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Import the Header component
import Home from './components/Home';
import ServicePage from './components/ServicePage';
import Services from './components/Services';  // Import Services component
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> {/* Route to Services */}
        <Route path="/services/:serviceId" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
