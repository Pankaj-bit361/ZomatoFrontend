import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ed7f1a', padding: '20px 0' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '33%', padding: '0 20px' }}>
        <h3>About Us</h3>
        <p style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div style={{ width: '33%', padding: '0 20px' }}>
        <h3>Quick Links</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/" style={{ color: '#fff' }}>Home</a></li>
          <li><a href="/about" style={{ color: '#fff' }}>About</a></li>
          <li><a href="/menu" style={{ color: '#fff' }}>Menu</a></li>
          <li><a href="/contact" style={{ color: '#fff' }}>Contact</a></li>
        </ul>
      </div>
      <div style={{ width: '33%', padding: '0 20px' }}>
        <h3>Contact Us</h3>
        <p style={{ color: '#fff' }}>123 Street, City, Country</p>
        <p style={{ color: '#fff' }}>Phone: +1 123-456-7890</p>
        <p style={{ color: '#fff' }}>Email: info@example.com</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ color: '#fff', fontSize: '14px' }}>&copy; 2023 Your Restaurant. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
