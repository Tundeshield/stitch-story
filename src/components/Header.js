import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import Login from '../pages/Login';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className="shadow-sm flex justify-between items-center p-3 md:justify-center">
      <div className="">
        <Link to="/">
          <img
            className="w-28 hover:cursor-pointer md:w-40"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div>
        <div className="md:hidden">
          <MenuIcon className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
