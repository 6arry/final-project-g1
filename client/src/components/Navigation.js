/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavCode';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='ui inverted segment'>
      <div className='ui inverted secondary menu'>
        <Link to='/'>
          <a className='active item'>Home</a>
        </Link>
        <Link to='/host'>
          <a className='item'>Host</a>
        </Link>
        <Link to='/join'>
          <a className='item'>Join</a>
        </Link>
        <Link to='/logout'>
          <a className='item'>Logout</a>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
