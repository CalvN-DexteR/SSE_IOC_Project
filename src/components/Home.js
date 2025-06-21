import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Database, Shield, Zap, Rocket, Layers, ArrowRight, BookOpen, Code, Users } from 'lucide-react';

const Home = () => {
  const sections = [
    {
      title: 'Server Architecture',
      description: 'Learn about different server architectures, patterns, and design principles',
      icon: <Layers size={32} />,
      path: '/architecture',
      color: '#4facfe'
    },
    {
      title: 'Communication Protocols',
      description: 'Understand HTTP, WebSockets, gRPC, and other communication protocols',
      icon: <Server size={32} />,
      path: '/protocols',
      color: '#43e97b'
    },
    {
      title: 'Database Design',
      description: 'Master database design, optimization, and management strategies',
      icon: <Database size={32} />,
      path: '/databases',
      color: '#fa709a'
    },
    {
      title: 'Security Fundamentals',
      description: 'Learn authentication, authorization, and security best practices',
      icon: <Shield size={32} />,
      path: '/security',
      color: '#a8edea'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize server performance, caching, and scalability techniques',
      icon: <Zap size={32} />,
      path: '/performance',
      color: '#ff9a9e'
    },
    {
      title: 'Deployment & DevOps',
      description: 'Deploy applications and understand CI/CD pipelines',
      icon: <Rocket size={32} />,
      path: '/deployment',
      color: '#ffecd2'
    }
  ];

  const features = [
    {
      icon: <BookOpen size={24} />,
      title: 'Comprehensive Learning',
      description: 'From basic concepts to advanced server-side engineering practices'
    },
    {
      icon: <Code size={24} />,
      title: 'Practical Examples',
      description: 'Real-world code examples and implementation patterns'
    },
    {
      icon: <Users size={24} />,
      title: 'Industry Best Practices',
      description: 'Learn from industry standards and proven methodologies'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <h1 className="section-title">
            Server Side Engineering Fundamentals
          </h1>
          <p className="section-subtitle">
            Master the core concepts and best practices of server-side development
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/architecture" className="btn">
              Start Learning
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="grid">
            {features.map((feature, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  color: '#ff6b6b', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ marginBottom: '12px', fontSize: '1.3rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            textAlign: 'center', 
            marginBottom: '40px',
            color: 'white'
          }}>
            Learning Paths
          </h2>
          
          <div className="grid">
            {sections.map((section, index) => (
              <Link 
                key={index} 
                to={section.path} 
                style={{ textDecoration: 'none' }}
              >
                <div className="card" style={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ 
                      color: section.color, 
                      marginBottom: '16px'
                    }}>
                      {section.icon}
                    </div>
                    <h3 style={{ 
                      marginBottom: '12px', 
                      fontSize: '1.4rem',
                      color: '#333'
                    }}>
                      {section.title}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      {section.description}
                    </p>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: section.color,
                    fontWeight: '600'
                  }}>
                    Learn More
                    <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#333'
            }}>
              What You'll Learn
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ marginBottom: '12px', color: '#ff6b6b' }}>Core Concepts</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    Server architecture patterns
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    Request/response lifecycle
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    State management
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ marginBottom: '12px', color: '#ff6b6b' }}>Technologies</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    HTTP and REST APIs
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    Database systems
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    Authentication & security
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ marginBottom: '12px', color: '#ff6b6b' }}>Best Practices</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    Performance optimization
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    Scalability strategies
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>•</span>
                    Deployment & monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 