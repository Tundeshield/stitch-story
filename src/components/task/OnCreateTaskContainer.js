import React, { useEffect, useState } from 'react';
import OnCreateTaskItem from './OnCreateTaskItem';

const OnCreateTaskContainer = () => {
  const [tasks, setTasks] = useState([
    {
      id: '2',
      taskName: 'Sew 4 yards of shirt',
      supervisor: 'Shade Ayokunu',
    },
    {
      id: '2',
      taskName: 'Iron Clothes',
      supervisor: 'Tunde Adepegba',
    },
  ]);

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
          {tasks.map((item) => (
            <OnCreateTaskItem
              taskName={item.taskName}
              id={item.id}
              key={item.id}
              supervisor={item.supervisor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnCreateTaskContainer;
