import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#ed7f1a',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navListStyle = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  };

  const navItemStyle = {
    margin: '0 10px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  };

  const activeLinkStyle = {
    color: '#f0f0f0',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={navLinkStyle}>
        <h1 style={{ margin: 0 }}>Zusty Zomato</h1>
      </Link>
      <ul style={navListStyle}>
        <li style={navItemStyle}>
          <Link to="/" style={navLinkStyle} activeStyle={activeLinkStyle}>Home</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/order" style={navLinkStyle} activeStyle={activeLinkStyle}>Orders</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/login" style={navLinkStyle} activeStyle={activeLinkStyle}>Login</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/signup" style={navLinkStyle} activeStyle={activeLinkStyle}>Signup</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/admin" style={navLinkStyle} activeStyle={activeLinkStyle}>Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
