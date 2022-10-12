import React from 'react';
import SideMenu from './SideMenu';

const Page = ({ children }) => {
  return (
    <div className="h-screen flex">
      <SideMenu />
      {children}
    </div>
  );
};

export default Page;
