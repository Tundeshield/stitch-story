import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Page from '../../components/Page';
import { TaskComments } from '../../components/comment/TaskComments';
import TaskInfoCard from '../../components/TaskInfoCard';

const Task = () => {
  ///projects/:projectID/:taskID
  const { projectID, taskID } = useParams();
  return (
    <Page>
      <Container>
        <div className="flex flex-col">
          <section>
            <TaskInfoCard />
          </section>
          <section>
            <TaskComments />
          </section>
        </div>
      </Container>
    </Page>
  );
};

export default Task;