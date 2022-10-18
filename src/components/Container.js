import React, { useEffect } from 'react';
import BreadCrumb from './BreadCrumb';
import Header from './Header';
import axios from 'axios';
import SideMenu from './SideMenu';

const Container = ({ children }) => {
  return (
    <div className="flex bg-myGray">
      <SideMenu />
      <div className="w-screen py-8 px-14">{children}</div>
    </div>
  );
};

export default Container;
