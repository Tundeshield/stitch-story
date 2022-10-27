import React from 'react';

import Container from '../../components/Container';

import Page from '../../components/Page';
import ProjecHeader from '../../components/ProjecHeader';

import TaskTable from '../../components/staff/TaskTable';

const StaffTasks = () => {
  return (
    <Page>
      <Container>
        <ProjecHeader header="My Tasks" />
        <div className="flex flex-col justify-center">
          <TaskTable />
        </div>
      </Container>
    </Page>
  );
};

export default StaffTasks;
