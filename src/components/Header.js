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
import MobileDrawer from './menu/MobileDrawer';

const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.role);

  // const [user] = useAuthState(auth);
  const admin = useSelector((state) => state.user.role);

  return (
    <header className="shadow bg-white flex py-3 px-4 justify-between items-center">
      <div className="max-w-7xl  sm:px-6 lg:px-8">
        <Link
          to={
            user === 'admin'
              ? '/projects'
              : user === 'supervisor'
              ? '/staff/staff-tasks'
              : user === 'client'
              ? '/orders'
              : '/'
          }
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
          <span className="hidden md:block">
            <Avatar
              alt="Remy Sharp"
              src={user?.photoURL ? user?.photoURL : userImg}
              className=" cursor-pointer "
            />
          </span>
        ) : (
          <AccountMenu user={user}>
            <span className="hidden md:block">
              <Avatar
                alt="Remy Sharp"
                src={user?.photoURL ? user?.photoURL : userImg}
                className="cursor-pointer "
              />
            </span>
          </AccountMenu>
        )}

        <span className="cursor-pointer text-myDarkBlue md:hidden">
          <MobileDrawer />
        </span>
      </div>
    </header>
  );
};

export default Header;
