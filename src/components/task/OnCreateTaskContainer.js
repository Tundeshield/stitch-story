import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';
import OnCreateTaskItem from './OnCreateTaskItem';

const OnCreateTaskContainer = () => {
  const tasks = useSelector((state) => state.task);
  const { id } = useParams();

  const [tasksList, setTasksList] = useState([]);

  const getData = async () => {
    const taskRef = collection(db, 'tasks');
    const q = query(taskRef, where('projectId', '==', id));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasksList(data);
    });
    return unsub;
  };

  useEffect(() => {
    getData();
  }, []);

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
          {!tasksList ? (
            <p>There are no tasks to display. Please create some..</p>
          ) : (
            tasksList.map((item) => (
              <OnCreateTaskItem item={item} key={item.id} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default OnCreateTaskContainer;
