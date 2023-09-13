// nav.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#D9D9D9' }}>
      <h1>SAVE YOUR NOTES !| SYN</h1>
      <Link className='im-bored-button' to="/memes">I'm Bored</Link> {/* Add a Link to the Memes page */}
    </nav>
  );
};

export default Nav;
