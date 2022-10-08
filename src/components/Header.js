import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, IconButton } from '@mui/material';

const Header = () => {
  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };
  return (
    <header className="bg-white shadow flex py-3 px-4 justify-between items-center">
      <div className="max-w-7xl  sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-txt">
          Dashboard
        </h1>
      </div>
      <div className="flex items-center px-8">
        <IconButton className="rounded-lg">
          <NotificationsNoneIcon className="mr-2 cursor-pointer w-3" />
        </IconButton>
        <IconButton>
          <Avatar
            alt="Remy Sharp"
            src={user.imageUrl}
            className="cursor-pointer"
          />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
