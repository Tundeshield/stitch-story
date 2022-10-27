import React from 'react';
import Container from '../../components/Container';
import Page from '../../components/Page';
import ProjecHeader from '../../components/ProjecHeader';
import ProjectHeader from '../../components/ProjectHeader';
import TaskTable from '../../components/staff/TaskTable';

const StaffTasks = () => {
  return (
    <Page>
      <Container>
        <ProjecHeader header="My Tasks" />
        <div className="flex justify-center">
          <TaskTable />
        </div>
      </Container>
    </Page>
  );
};

export default StaffTasks;
