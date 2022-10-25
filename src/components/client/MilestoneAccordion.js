import * as React from 'react';
import Milestone from './Milestone';

export default function MilestoneAccordion({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Milestone task={task} />
      ))}
    </div>
  );
}
