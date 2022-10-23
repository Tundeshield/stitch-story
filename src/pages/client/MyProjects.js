import React from 'react';
import { ChangePassword } from '../../components/Alerts';
import OrderCard from '../../components/client/OrderCard';
import Container from '../../components/Container';
import Page from '../../components/Page';
import ProjectHeader from '../../components/ProjectHeader';

const MyProjects = () => {
  const headers = [
    {
      id: 123456,
      title: 'Your orders',
    },
  ];
  return (
    <Page>
      <Container>
        <ProjectHeader header={headers} />
        <div className="flex flex-col justify-center items-center w-5/6 mt-4 ">
          <OrderCard />
          <span>
            <ChangePassword />
          </span>
        </div>
      </Container>
    </Page>
  );
};

export default MyProjects;
