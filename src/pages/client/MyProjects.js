import React from 'react';
import OrderCard from '../../components/client/OrderCard';
import Container from '../../components/Container';
import Page from '../../components/Page';
import ProjectHeader from '../../components/ProjectHeader';

const MyProjects = () => {
  const headers = [
    {
      title: 'Your orders',
    },
  ];
  return (
    <Page>
      <Container>
        <ProjectHeader header={headers} />
        <div className="flex flex-col justify-center items-center w-5/6 mt-4 ">
          <OrderCard />
        </div>
      </Container>
    </Page>
  );
};

export default MyProjects;
