import React from 'react';
import MilestoneUpdate from './MilestoneUpdate';

const MilestoneUpdateContainer = ({ comments }) => {
  return (
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      {comments.length === 0 && <p>No comments yet</p>}
      {comments.map((comment) => (
        <MilestoneUpdate comment={comment} id={comment.id} key={comment.id} />
      ))}
    </ol>
  );
};

export default MilestoneUpdateContainer;
