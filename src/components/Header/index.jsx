import React from 'react';
import logo from './Minesweep.png';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='logo-wrapper'>
      <Link to='/'>
        <img className='logo' src={logo} alt="Logo" />
      </Link>
    </div>
  )
}

export default Header