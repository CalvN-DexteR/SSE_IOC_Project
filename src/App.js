import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Architecture from './components/Architecture';
import Protocols from './components/Protocols';
import Databases from './components/Databases';
import Security from './components/Security';
import Performance from './components/Performance';
import Deployment from './components/Deployment';

// Component to handle page-specific styling and scroll to top
const PageWrapper = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const getPageClass = () => {
    switch (location.pathname) {
      case '/':
        return 'page-home';
      case '/architecture':
        return 'page-architecture';
      case '/protocols':
        return 'page-protocols';
      case '/databases':
        return 'page-databases';
      case '/security':
        return 'page-security';
      case '/performance':
        return 'page-performance';
      case '/deployment':
        return 'page-deployment';
      default:
        return 'page-home';
    }
  };

  return (
    <div className={getPageClass()} style={{ minHeight: '100vh' }}>
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <PageWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/protocols" element={<Protocols />} />
            <Route path="/databases" element={<Databases />} />
            <Route path="/security" element={<Security />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/deployment" element={<Deployment />} />
          </Routes>
        </PageWrapper>
      </div>
    </Router>
  );
}

export default App; 