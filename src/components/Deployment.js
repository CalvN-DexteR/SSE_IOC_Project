import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, GitBranch, Cloud, Monitor, Settings } from 'lucide-react';

const Deployment = () => {
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

  const deploymentStrategies = [
    {
      name: 'Blue-Green Deployment',
      description: 'Maintain two identical production environments and switch traffic between them.',
      pros: ['Zero downtime', 'Easy rollback', 'Safe deployment'],
      cons: ['Higher infrastructure costs', 'Complex setup'],
      icon: <GitBranch size={24} />
    },
    {
      name: 'Canary Deployment',
      description: 'Gradually roll out changes to a small subset of users before full deployment.',
      pros: ['Risk mitigation', 'Real-time monitoring', 'Gradual rollout'],
      cons: ['Complex traffic management', 'Longer deployment time'],
      icon: <Monitor size={24} />
    },
    {
      name: 'Rolling Deployment',
      description: 'Update instances one by one while keeping the service available.',
      pros: ['Minimal downtime', 'Resource efficient', 'Simple implementation'],
      cons: ['Potential version inconsistency', 'Rollback complexity'],
      icon: <Settings size={24} />
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <Link to="/performance" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            color: 'white', 
            textDecoration: 'none',
            marginBottom: '20px'
          }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Back to Performance
          </Link>
          
          <h1 className="section-title">Deployment & DevOps</h1>
          <p className="section-subtitle">
            Deploy applications and understand CI/CD pipelines
          </p>
        </div>
      </section>

      {/* Deployment Strategies */}
      <section className="section">
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '30px',
            color: 'white',
            textAlign: 'center'
          }}>
            Deployment Strategies
          </h2>
          
          <div className="grid">
            {deploymentStrategies.map((strategy, index) => (
              <div key={index} className="card">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '16px',
                  color: '#8b5cf6'
                }}>
                  {strategy.icon}
                  <h3 style={{ marginLeft: '12px', fontSize: '1.4rem' }}>
                    {strategy.name}
                  </h3>
                </div>
                
                <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#666' }}>
                  {strategy.description}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <h4 style={{ color: '#43e97b', marginBottom: '8px' }}>Pros</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {strategy.pros.map((pro, i) => (
                        <li key={i} style={{ 
                          marginBottom: '4px', 
                          paddingLeft: '16px', 
                          position: 'relative',
                          fontSize: '14px'
                        }}>
                          <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 style={{ color: '#fa709a', marginBottom: '8px' }}>Cons</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {strategy.cons.map((con, i) => (
                        <li key={i} style={{ 
                          marginBottom: '4px', 
                          paddingLeft: '16px', 
                          position: 'relative',
                          fontSize: '14px'
                        }}>
                          <span style={{ position: 'absolute', left: 0, color: '#fa709a' }}>✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
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
            <Link to="/performance" className="btn btn-secondary" onClick={scrollToTop}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }} />
              Previous: Performance
            </Link>
            
            <Link to="/" className="btn" onClick={scrollToTop}>
              Back to Home
              <ArrowLeft size={16} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deployment; 