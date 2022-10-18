import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SideMenu from './SideMenu';

const Page = ({ children }) => {
  return (
    <React.Fragment className="h-screen">
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Page;
