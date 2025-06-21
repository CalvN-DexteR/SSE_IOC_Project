import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, TrendingUp, Database, Clock, BarChart3 } from 'lucide-react';

const Performance = () => {
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

  const optimizationTechniques = [
    {
      title: 'Caching',
      description: 'Store frequently accessed data in memory for faster retrieval.',
      strategies: ['Redis/Memcached', 'Application-level caching', 'CDN caching', 'Database query caching'],
      icon: <Clock size={24} />
    },
    {
      title: 'Database Optimization',
      description: 'Optimize database queries and structure for better performance.',
      strategies: ['Query optimization', 'Indexing', 'Connection pooling', 'Database sharding'],
      icon: <Database size={24} />
    },
    {
      title: 'Load Balancing',
      description: 'Distribute incoming requests across multiple servers.',
      strategies: ['Round-robin', 'Least connections', 'IP hash', 'Health checks'],
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <Link to="/security" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            color: 'white', 
            textDecoration: 'none',
            marginBottom: '20px'
          }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Back to Security
          </Link>
          
          <h1 className="section-title">Performance Optimization</h1>
          <p className="section-subtitle">
            Optimize server performance, caching, and scalability techniques
          </p>
        </div>
      </section>

      {/* Optimization Techniques */}
      <section className="section">
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '30px',
            color: 'white',
            textAlign: 'center'
          }}>
            Performance Optimization Techniques
          </h2>
          
          <div className="grid">
            {optimizationTechniques.map((technique, index) => (
              <div key={index} className="card">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '16px',
                  color: '#ff9a9e'
                }}>
                  {technique.icon}
                  <h3 style={{ marginLeft: '12px', fontSize: '1.4rem' }}>
                    {technique.title}
                  </h3>
                </div>
                
                <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#666' }}>
                  {technique.description}
                </p>
                
                <div>
                  <h4 style={{ color: '#43e97b', marginBottom: '8px' }}>Strategies</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {technique.strategies.map((strategy, i) => (
                      <span key={i} className="highlight">
                        {strategy}
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
            <Link to="/security" className="btn btn-secondary" onClick={scrollToTop}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }} />
              Previous: Security
            </Link>
            
            <Link to="/deployment" className="btn" onClick={scrollToTop}>
              Next: Deployment & DevOps
              <ArrowLeft size={16} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance; 