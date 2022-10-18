import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OnCreateTaskItem from './OnCreateTaskItem';

const OnCreateTaskContainer = () => {
  const tasks = useSelector((state) => state.task);

  return (
    <div>
      <div class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Added Tasks
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Outline of the list of tasks required to complete the listed project.
        </p>
        <ul class="my-4 space-y-3">
          {!tasks ? (
            <p>There are no tasks to display. Please create some..</p>
          ) : (
            tasks.map((item) => (
              <OnCreateTaskItem
                taskName={item.taskName}
                id={item.id}
                key={item.id}
                supervisor={item.supervisor}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default OnCreateTaskContainer;
