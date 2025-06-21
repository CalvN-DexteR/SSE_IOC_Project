import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Wifi, MessageSquare, Zap, Lock, Shield } from 'lucide-react';

const Protocols = () => {
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

  const protocols = [
    {
      name: 'HTTP/HTTPS',
      description: 'The foundation of web communication, used for request-response interactions.',
      features: ['Stateless', 'Request-response model', 'RESTful APIs', 'Wide browser support'],
      useCases: ['Web applications', 'API endpoints', 'File transfers'],
      icon: <Globe size={24} />
    },
    {
      name: 'WebSockets',
      description: 'Full-duplex communication protocol that enables real-time bidirectional data flow.',
      features: ['Real-time communication', 'Bidirectional', 'Low latency', 'Persistent connection'],
      useCases: ['Chat applications', 'Live dashboards', 'Gaming', 'Collaborative tools'],
      icon: <Wifi size={24} />
    },
    {
      name: 'gRPC',
      description: 'High-performance RPC framework using Protocol Buffers for efficient communication.',
      features: ['High performance', 'Strong typing', 'Code generation', 'Streaming support'],
      useCases: ['Microservices', 'Mobile APIs', 'High-performance systems'],
      icon: <MessageSquare size={24} />
    }
  ];

  const httpMethods = [
    { method: 'GET', description: 'Retrieve data from the server', safe: true, idempotent: true },
    { method: 'POST', description: 'Submit data to be processed', safe: false, idempotent: false },
    { method: 'PUT', description: 'Update or replace a resource', safe: false, idempotent: true },
    { method: 'DELETE', description: 'Remove a resource', safe: false, idempotent: true },
    { method: 'PATCH', description: 'Partially update a resource', safe: false, idempotent: false }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <Link to="/architecture" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            color: 'white', 
            textDecoration: 'none',
            marginBottom: '20px'
          }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Back to Architecture
          </Link>
          
          <h1 className="section-title">Communication Protocols</h1>
          <p className="section-subtitle">
            Understanding how servers communicate with clients and other services
          </p>
        </div>
      </section>

      {/* Protocol Overview */}
      <section className="section">
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '30px',
            color: 'white',
            textAlign: 'center'
          }}>
            Common Communication Protocols
          </h2>
          
          <div className="grid">
            {protocols.map((protocol, index) => (
              <div key={index} className="card">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '16px',
                  color: '#43e97b'
                }}>
                  {protocol.icon}
                  <h3 style={{ marginLeft: '12px', fontSize: '1.4rem' }}>
                    {protocol.name}
                  </h3>
                </div>
                
                <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#666' }}>
                  {protocol.description}
                </p>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#43e97b', marginBottom: '8px' }}>Key Features</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {protocol.features.map((feature, i) => (
                      <span key={i} className="highlight">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ color: '#4facfe', marginBottom: '8px' }}>Use Cases</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {protocol.useCases.map((useCase, i) => (
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

      {/* HTTP Methods */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#333'
            }}>
              HTTP Methods
            </h2>
            
            <div className="code-block">
{`// HTTP Request Examples
GET /api/users          // Retrieve all users
GET /api/users/123      // Retrieve specific user
POST /api/users         // Create new user
PUT /api/users/123      // Update entire user
PATCH /api/users/123    // Partially update user
DELETE /api/users/123   // Delete user`}
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <div className="grid">
                {httpMethods.map((method, index) => (
                  <div key={index} style={{
                    padding: '16px',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    background: '#f8f9fa'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '8px' 
                    }}>
                      <span style={{
                        background: method.safe ? '#43e97b' : '#fa709a',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        marginRight: '8px'
                      }}>
                        {method.method}
                      </span>
                      <span style={{ fontSize: '14px', color: '#666' }}>
                        {method.safe ? 'Safe' : 'Unsafe'} • {method.idempotent ? 'Idempotent' : 'Non-idempotent'}
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#333', margin: 0 }}>
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#333'
            }}>
              Protocol Implementation Examples
            </h2>
            
            <div className="grid">
              <div>
                <h3 style={{ color: '#43e97b', marginBottom: '16px' }}>HTTP REST API</h3>
                <div className="code-block">
{`// Express.js REST API
app.get('/api/users', (req, res) => {
  const users = UserService.getAllUsers();
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const user = UserService.createUser(req.body);
  res.status(201).json(user);
});

app.put('/api/users/:id', (req, res) => {
  const user = UserService.updateUser(req.params.id, req.body);
  res.json(user);
});`}
                </div>
              </div>
              
              <div>
                <h3 style={{ color: '#43e97b', marginBottom: '16px' }}>WebSocket Server</h3>
                <div className="code-block">
{`// WebSocket with Socket.io
io.on('connection', (socket) => {
  console.log('User connected');
  
  socket.on('message', (data) => {
    // Broadcast to all clients
    io.emit('message', data);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});`}
                </div>
              </div>
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
              Protocol Best Practices
            </h2>
            
            <div className="grid">
              <div>
                <h3 style={{ color: '#43e97b', marginBottom: '16px' }}>HTTP Best Practices</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>•</span>
                    Use appropriate HTTP status codes
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>•</span>
                    Implement proper error handling
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>•</span>
                    Use HTTPS for security
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>•</span>
                    Implement rate limiting
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ color: '#43e97b', marginBottom: '16px' }}>WebSocket Best Practices</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>•</span>
                    Implement heartbeat mechanisms
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>•</span>
                    Handle connection errors gracefully
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>•</span>
                    Use rooms for message targeting
                  </li>
                  <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#43e97b' }}>•</span>
                    Implement reconnection logic
                  </li>
                </ul>
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
            <Link to="/architecture" className="btn btn-secondary" onClick={scrollToTop}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }} />
              Previous: Architecture
            </Link>
            
            <Link to="/databases" className="btn" onClick={scrollToTop}>
              Next: Database Design
              <ArrowLeft size={16} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Protocols; 