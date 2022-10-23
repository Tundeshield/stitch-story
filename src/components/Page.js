import React from 'react';
import { ChangePassword } from './Alerts';
import Footer from './Footer';
import Header from './Header';
import SideMenu from './SideMenu';

const Page = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}

      <Footer />
    </React.Fragment>
  );
};

export default Page;
