import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import Login from '../pages/Login';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-2 shadow-sm">
      <Link to="/">
        <img className="w-40 hover:cursor-pointer" src={logo} alt="" />
      </Link>

      <Link
        to="/login"
        className="mr-8 py-2 px-5 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-400"
      >
        Sign In
      </Link>
    </div>
  );
};

export default Header;
