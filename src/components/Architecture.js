import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, Server, Database, Users, Globe, Zap } from 'lucide-react';

const Architecture = () => {
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

  const patterns = [
    {
      title: 'Monolithic Architecture',
      description: 'A single, unified application where all components are tightly coupled and deployed together.',
      pros: ['Simple to develop and deploy', 'Easy to test', 'Lower initial complexity'],
      cons: ['Hard to scale', 'Difficult to maintain', 'Single point of failure'],
      icon: <Server size={24} />
    },
    {
      title: 'Microservices Architecture',
      description: 'A collection of small, independent services that communicate through well-defined APIs.',
      pros: ['Independent scaling', 'Technology diversity', 'Fault isolation'],
      cons: ['Distributed system complexity', 'Network latency', 'Data consistency challenges'],
      icon: <Layers size={24} />
    },
    {
      title: 'Event-Driven Architecture',
      description: 'Services communicate through events, enabling loose coupling and asynchronous processing.',
      pros: ['Loose coupling', 'Scalability', 'Real-time processing'],
      cons: ['Event ordering challenges', 'Debugging complexity', 'Event schema evolution'],
      icon: <Zap size={24} />
    }
  ];

  const layers = [
    {
      name: 'Presentation Layer',
      description: 'Handles user interface and client communication',
      components: ['Web servers', 'Load balancers', 'API gateways'],
      icon: <Users size={20} />
    },
    {
      name: 'Application Layer',
      description: 'Contains business logic and application services',
      components: ['Business services', 'Workflow engines', 'Integration services'],
      icon: <Server size={20} />
    },
    {
      name: 'Data Layer',
      description: 'Manages data storage and persistence',
      components: ['Databases', 'File systems', 'Caches'],
      icon: <Database size={20} />
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <Link to="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            color: 'white', 
            textDecoration: 'none',
            marginBottom: '20px'
          }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Back to Home
          </Link>
          
          <h1 className="section-title">Server Architecture</h1>
          <p className="section-subtitle">
            Understanding the fundamental patterns and principles of server-side architecture
          </p>
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="section">
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '30px',
            color: 'white',
            textAlign: 'center'
          }}>
            Common Architecture Patterns
          </h2>
          
          <div className="grid">
            {patterns.map((pattern, index) => (
              <div key={index} className="card">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '16px',
                  color: '#4facfe'
                }}>
                  {pattern.icon}
                  <h3 style={{ marginLeft: '12px', fontSize: '1.4rem' }}>
                    {pattern.title}
                  </h3>
                </div>
                
                <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#666' }}>
                  {pattern.description}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <h4 style={{ color: '#43e97b', marginBottom: '8px' }}>Pros</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {pattern.pros.map((pro, i) => (
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
                      {pattern.cons.map((con, i) => (
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

      {/* Layered Architecture */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#333'
            }}>
              Layered Architecture
            </h2>
            
            <p style={{ 
              textAlign: 'center', 
              marginBottom: '40px',
              fontSize: '1.1rem',
              color: '#666'
            }}>
              Most server applications follow a layered architecture pattern for better organization and maintainability
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {layers.map((layer, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '20px',
                  background: index % 2 === 0 ? '#f8f9fa' : 'white',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ 
                    color: '#4facfe',
                    marginRight: '20px'
                  }}>
                    {layer.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '8px', color: '#333' }}>
                      {layer.name}
                    </h3>
                    <p style={{ marginBottom: '12px', color: '#666' }}>
                      {layer.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {layer.components.map((component, i) => (
                        <span key={i} className="highlight">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#333'
            }}>
              Basic Server Architecture Example
            </h2>
            
            <div className="code-block">
{`// Basic Express.js Server Architecture
const express = require('express');
const app = express();

// Middleware Layer (Presentation)
app.use(express.json());
app.use(express.static('public'));

// Route Layer (Application)
app.get('/api/users', async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Service Layer (Business Logic)
class UserService {
  static async getAllUsers() {
    return await UserRepository.findAll();
  }
}

// Repository Layer (Data Access)
class UserRepository {
  static async findAll() {
    return await db.query('SELECT * FROM users');
  }
}

// Database Layer (Data Storage)
const db = require('./database');

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#333'
            }}>
              Architecture Best Practices
            </h2>
            
            <div className="grid">
              <div>
                <h3 style={{ color: '#4facfe', marginBottom: '16px' }}>Separation of Concerns</h3>
                <p style={{ lineHeight: '1.6', color: '#666' }}>
                  Keep different layers and components separate with clear boundaries and responsibilities.
                </p>
              </div>
              
              <div>
                <h3 style={{ color: '#4facfe', marginBottom: '16px' }}>Loose Coupling</h3>
                <p style={{ lineHeight: '1.6', color: '#666' }}>
                  Minimize dependencies between components to make the system more maintainable and flexible.
                </p>
              </div>
              
              <div>
                <h3 style={{ color: '#4facfe', marginBottom: '16px' }}>High Cohesion</h3>
                <p style={{ lineHeight: '1.6', color: '#666' }}>
                  Keep related functionality together within the same module or component.
                </p>
              </div>
              
              <div>
                <h3 style={{ color: '#4facfe', marginBottom: '16px' }}>Scalability</h3>
                <p style={{ lineHeight: '1.6', color: '#666' }}>
                  Design your architecture to handle increased load through horizontal or vertical scaling.
                </p>
              </div>
            </div>
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
            <Link to="/" className="btn btn-secondary" onClick={scrollToTop}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }} />
              Previous: Home
            </Link>
            
            <Link to="/protocols" className="btn" onClick={scrollToTop}>
              Next: Communication Protocols
              <ArrowLeft size={16} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture; 