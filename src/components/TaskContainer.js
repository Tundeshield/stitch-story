import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import axios from 'axios';

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tasks').then((response) => {
      setTasks(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <div class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Task List
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Outline of the list of tasks required to complete the listed project.
        </p>
        <ul class="my-4 space-y-3">
          {tasks.map((item) => (
            <TaskItem taskName={item.taskName} id={item.id} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskContainer;
