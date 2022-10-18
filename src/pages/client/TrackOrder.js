import React from 'react';
import ProjectInfoCard from '../../components/client/ProjectInfoCard';
import Container from '../../components/Container';
import Page from '../../components/Page';

const TrackOrder = () => {
  return (
    <Page>
      <Container>
        <p>Track order</p>

        <div className="bg-red-200 h-screen">
          <div>
            <ProjectInfoCard />
          </div>
          <div>Project milestones</div>
        </div>
      </Container>
    </Page>
  );
};

export default TrackOrder;
