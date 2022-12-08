import React, { useEffect } from 'react';
import SideMenu from './SideMenu';

const Container = ({ children }) => {
  return (
    <div className="flex bg-myGray">
      <div className="hidden lg:block">
        <SideMenu />
      </div>
      <div className="w-screen py-8 px-14">{children}</div>
    </div>
  );
};

export default Container;
