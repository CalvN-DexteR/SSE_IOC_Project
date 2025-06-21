import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Table, Zap, Shield, BarChart3 } from 'lucide-react';

const Databases = () => {
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

  const dbTypes = [
    {
      name: 'Relational (SQL)',
      description: 'Structured data with relationships between tables using SQL.',
      examples: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server'],
      useCases: ['ACID transactions', 'Complex queries', 'Data integrity'],
      icon: <Table size={24} />
    },
    {
      name: 'NoSQL',
      description: 'Non-relational databases for flexible, scalable data storage.',
      examples: ['MongoDB', 'Cassandra', 'Redis', 'DynamoDB'],
      useCases: ['High scalability', 'Flexible schema', 'Big data'],
      icon: <Database size={24} />
    },
    {
      name: 'Graph',
      description: 'Specialized for complex relationships and network data.',
      examples: ['Neo4j', 'ArangoDB', 'Amazon Neptune'],
      useCases: ['Social networks', 'Recommendation systems', 'Fraud detection'],
      icon: <BarChart3 size={24} />
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <Link to="/protocols" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            color: 'white', 
            textDecoration: 'none',
            marginBottom: '20px'
          }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Back to Protocols
          </Link>
          
          <h1 className="section-title">Database Design</h1>
          <p className="section-subtitle">
            Master database design, optimization, and management strategies
          </p>
        </div>
      </section>

      {/* Database Types */}
      <section className="section">
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '30px',
            color: 'white',
            textAlign: 'center'
          }}>
            Database Types
          </h2>
          
          <div className="grid">
            {dbTypes.map((type, index) => (
              <div key={index} className="card">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '16px',
                  color: '#fa709a'
                }}>
                  {type.icon}
                  <h3 style={{ marginLeft: '12px', fontSize: '1.4rem' }}>
                    {type.name}
                  </h3>
                </div>
                
                <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#666' }}>
                  {type.description}
                </p>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#43e97b', marginBottom: '8px' }}>Popular Examples</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {type.examples.map((example, i) => (
                      <span key={i} className="highlight">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ color: '#4facfe', marginBottom: '8px' }}>Use Cases</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {type.useCases.map((useCase, i) => (
                      <li key={i} style={{ 
                        marginBottom: '4px', 
                        paddingLeft: '16px', 
                        position: 'relative',
                        fontSize: '14px'
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: '#4facfe' }}>•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
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
            <Link to="/protocols" className="btn btn-secondary" onClick={scrollToTop}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }} />
              Previous: Protocols
            </Link>
            
            <Link to="/security" className="btn" onClick={scrollToTop}>
              Next: Security Fundamentals
              <ArrowLeft size={16} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Databases; 
 