import React from 'react';
import MilestoneAccordion from '../../components/client/MilestoneAccordion';
import ProjectInfoCard from '../../components/client/ProjectInfoCard';
import Container from '../../components/Container';
import Page from '../../components/Page';

const TrackOrder = () => {
  return (
    <Page>
      <Container>
        <div className=" h-full w-1/2 mx-auto">
          <div>
            <ProjectInfoCard />
          </div>
          <div>
            <MilestoneAccordion />
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default TrackOrder;
