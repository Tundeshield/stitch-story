import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import Container from '../../components/Container';

import Page from '../../components/Page';
import ProjecHeader from '../../components/ProjecHeader';

import TaskTable from '../../components/staff/TaskTable';
import { auth } from '../../utils/firebase';

const StaffTasks = () => {
  const [user] = useAuthState(auth);
  return (
    <Page>
      <Container>
        <ProjecHeader header="A LIST OF ALL YOUR TASKS." />
        <div className="flex flex-col justify-center">
          <TaskTable user={user} />
        </div>
      </Container>
    </Page>
  );
};

export default StaffTasks;
