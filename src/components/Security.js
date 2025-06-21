import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Key, Eye, AlertTriangle } from 'lucide-react';

const Security = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const securityConcepts = [
    {
      title: 'Authentication',
      description: 'Verifying the identity of users or systems.',
      methods: ['Username/Password', 'Multi-factor Authentication', 'OAuth 2.0', 'JWT Tokens'],
      icon: <Key size={24} />
    },
    {
      title: 'Authorization',
      description: 'Determining what resources a user can access.',
      methods: ['Role-based Access Control', 'Permission-based Access', 'Attribute-based Access'],
      icon: <Shield size={24} />
    },
    {
      title: 'Encryption',
      description: 'Protecting data by converting it into unreadable format.',
      methods: ['Symmetric Encryption', 'Asymmetric Encryption', 'Hashing', 'SSL/TLS'],
      icon: <Lock size={24} />
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <Link to="/databases" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            color: 'white', 
            textDecoration: 'none',
            marginBottom: '20px'
          }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Back to Databases
          </Link>
          
          <h1 className="section-title">Security Fundamentals</h1>
          <p className="section-subtitle">
            Learn authentication, authorization, and security best practices
          </p>
        </div>
      </section>

      {/* Security Concepts */}
      <section className="section">
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '30px',
            color: 'white',
            textAlign: 'center'
          }}>
            Core Security Concepts
          </h2>
          
          <div className="grid">
            {securityConcepts.map((concept, index) => (
              <div key={index} className="card">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '16px',
                  color: '#a8edea'
                }}>
                  {concept.icon}
                  <h3 style={{ marginLeft: '12px', fontSize: '1.4rem' }}>
                    {concept.title}
                  </h3>
                </div>
                
                <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#666' }}>
                  {concept.description}
                </p>
                
                <div>
                  <h4 style={{ color: '#43e97b', marginBottom: '8px' }}>Common Methods</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {concept.methods.map((method, i) => (
                      <span key={i} className="highlight">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="navigation-section">
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link to="/databases" className="btn btn-secondary" onClick={scrollToTop}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }} />
              Previous: Databases
            </Link>
            
            <Link to="/performance" className="btn" onClick={scrollToTop}>
              Next: Performance Optimization
              <ArrowLeft size={16} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security; 