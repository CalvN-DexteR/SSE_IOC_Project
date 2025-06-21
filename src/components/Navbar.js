import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Server, Database, Shield, Zap, Rocket, Layers } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Server size={20} /> },
    { path: '/architecture', label: 'Architecture', icon: <Layers size={20} /> },
    { path: '/protocols', label: 'Protocols', icon: <Server size={20} /> },
    { path: '/databases', label: 'Databases', icon: <Database size={20} /> },
    { path: '/security', label: 'Security', icon: <Shield size={20} /> },
    { path: '/performance', label: 'Performance', icon: <Zap size={20} /> },
    { path: '/deployment', label: 'Deployment', icon: <Rocket size={20} /> },
  ];

  return (
    <nav className="navbar" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ff6b6b',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease'
          }}>
            <Server size={24} />
            SSE Fundamentals
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#ff6b6b' : '#666',
                  fontWeight: location.pathname === item.path ? '600' : '400',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  background: location.pathname === item.path ? 'rgba(255, 107, 107, 0.1)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.background = 'rgba(255, 107, 107, 0.1)';
                    e.target.style.color = '#ff6b6b';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#666';
                  }
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#ff6b6b'
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)'
          }}>
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#ff6b6b' : '#666',
                  fontWeight: location.pathname === item.path ? '600' : '400',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  background: location.pathname === item.path ? 'rgba(255, 107, 107, 0.1)' : 'transparent'
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 