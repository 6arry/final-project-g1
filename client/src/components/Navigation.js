import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/host'>
          <li>Host</li>
        </Link>
        <Link to='/join'>
          <li>Join</li>
        </Link>
        <Link to='/logout'>
          <li>Logout</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
