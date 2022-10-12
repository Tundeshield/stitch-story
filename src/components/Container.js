import React, { useEffect } from 'react';
import BreadCrumb from './BreadCrumb';
import Header from './Header';
import axios from 'axios';

const Container = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-col w-full p-10">
        <BreadCrumb />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Container;
