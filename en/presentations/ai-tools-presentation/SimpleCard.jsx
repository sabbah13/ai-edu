import React from 'react';

// Simple Card component that demonstrates basic React concepts
function Card({ title, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Avatar component demonstrating props usage
function Avatar({ person, size = 50 }) {
  return (
    <img
      className="avatar"
      src={person.imageUrl}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Profile component demonstrating component composition
function Profile({ person }) {
  return (
    <div className="profile">
      <Avatar person={person} size={80} />
      <div className="profile-info">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
        <p>{person.bio}</p>
      </div>
    </div>
  );
}

// Main component that demonstrates nesting and reusability
export default function SimpleCard() {
  const samplePerson = {
    name: 'Jane Doe',
    role: 'Software Engineer',
    bio: 'Passionate about creating beautiful and functional user interfaces.',
    imageUrl: 'https://via.placeholder.com/150/0066cc/ffffff?text=JD'
  };

  return (
    <div className="app">
      <Card title="Profile Card" className="profile-card">
        <Profile person={samplePerson} />
      </Card>
      
      <Card title="Welcome Message">
        <p>Welcome to our React component demo!</p>
        <p>This card demonstrates:</p>
        <ul>
          <li>Functional components</li>
          <li>Props and children</li>
          <li>Component composition</li>
          <li>Conditional styling</li>
        </ul>
      </Card>
      
      <Card title="Quick Stats" className="stats-card">
        <div className="stats">
          <div className="stat-item">
            <strong>Components:</strong> 4
          </div>
          <div className="stat-item">
            <strong>Props Used:</strong> title, children, className, person, size
          </div>
          <div className="stat-item">
            <strong>React Concepts:</strong> Composition, Reusability, Props
          </div>
        </div>
      </Card>
    </div>
  );
} 