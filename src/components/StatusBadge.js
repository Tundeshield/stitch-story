import React from 'react';

const StatusBadge = (props) => {
  return (
    <>
      {props.status === 'Completed' && (
        <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
          Completed
        </span>
      )}
      {props.status === 'In progress' && (
        <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          In Progress
        </span>
      )}

      {props.status === 'Stalled' && (
        <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
          Stalled
        </span>
      )}
    </>
  );
};

export default StatusBadge;
