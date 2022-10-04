import React from 'react';
import Page from '../components/Page';
import SideMenu from '../components/SideMenu';

const Dashboard = () => {
  return (
    <div className="flex">
      <SideMenu />
      <Page>
        <h3>Dashboard</h3>
      </Page>
    </div>
  );
};

export default Dashboard;
