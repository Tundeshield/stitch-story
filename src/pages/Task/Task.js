import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Page from '../../components/Page';
import TaskInfoCard from '../../components/task/TaskInfoCard';

const Task = () => {
  const { id } = useParams();
  return (
    <Page>
      <Container>
        <div className="flex flex-col">
          <section>
            <TaskInfoCard id={id} />
          </section>
        </div>
      </Container>
    </Page>
  );
};

export default Task;
