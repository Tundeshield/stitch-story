import * as React from 'react';
import Milestone from './Milestone';

export default function MilestoneAccordion({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <span key={task.id}>
          <Milestone task={task} key={task.id} />
        </span>
      ))}
    </div>
  );
}
