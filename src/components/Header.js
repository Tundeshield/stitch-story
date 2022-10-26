import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import logo from '../assets/images/Logo.png';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import userImg from '../assets/images/user-default.png';
import AccountMenu from './menu/AccountMenu';

const Header = () => {
  const [open, setOpen] = useState(false);

  const [user] = useAuthState(auth);
  const admin = useSelector((state) => state.user.isAdmin);

  return (
    <header className="shadow bg-white flex py-3 px-4 justify-between items-center">
      <div className="max-w-7xl  sm:px-6 lg:px-8">
        <Link
          to={user && admin ? '/projects' : user && !admin ? '/orders' : '/'}
          className="cursor-pointer"
        >
          <img src={logo} alt="" className="w-64" />
        </Link>
      </div>
      <div className="flex items-center px-8">
        <span className="mr-2 cursor-pointer text-myDarkBlue">
          <Tooltip title="Notifications">
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Tooltip>
        </span>
        {admin ? (
          <Avatar
            alt="Remy Sharp"
            src={user?.photoURL ? user?.photoURL : userImg}
            className="cursor-pointer"
          />
        ) : (
          <AccountMenu user={user}>
            <Avatar
              alt="Remy Sharp"
              src={user?.photoURL ? user?.photoURL : userImg}
              className="cursor-pointer"
            />
          </AccountMenu>
        )}

        <span
          className="cursor-pointer text-myDarkBlue md:hidden"
          onClick={() => setOpen(!open)}
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
        </span>
      </div>
    </header>
  );
};

export default Header;
