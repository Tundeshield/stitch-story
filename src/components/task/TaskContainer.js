import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import axios from 'axios';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useParams } from 'react-router-dom';
import { DoneAlert } from '../Alerts';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const TaskContainer = ({ project }) => {
  const [tasks, setTasks] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    const taskRef = collection(db, 'tasks');
    const q = query(taskRef, where('projectId', '==', id));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks(data);
    });
    return unsub;
  };

  useEffect(() => {
    console.log(project.email);
    getData();
  }, []);
  return (
    <div>
      <div class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <span className="flex justify-between items-center">
          <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            Task List
          </h5>
          <Link to={`/tasks/create/${id}`}>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
          </Link>
        </span>

        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Outline of the list of tasks required to complete the listed project.
        </p>
        <ul class="my-4 space-y-3">
          {tasks.map((item) => (
            <TaskItem
              taskName={item.taskName}
              supervisor={item.supervisor}
              id={item.id}
              key={item.id}
              completed={item.completed}
              project={project}
            />
          ))}
        </ul>
        <DoneAlert />
      </div>
    </div>
  );
};

export default TaskContainer;
