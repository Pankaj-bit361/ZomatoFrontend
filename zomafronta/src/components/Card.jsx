import React from 'react';

const cardStyle = {
  width: '300px',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const descriptionStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ff5500',
  color: '#ffffff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
};


const Card = () => {
  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Card Title</h2>
      <p style={descriptionStyle}>
        This is a sample card description. It can contain any content you want.
      </p>
      <button style={buttonStyle}>Learn More</button>
    </div>
  );
};

export default Card;
