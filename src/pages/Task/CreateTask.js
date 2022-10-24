import React, { useState } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { addDays } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/task/taskSlice';
import Page from '../../components/Page';
import Container from '../../components/Container';
import DatePicker from '../../components/DatePicker';
import Button from '../../components/Button';
import { ErrorDisplay } from '../../components/Form/Form';
import OnCreateTaskContainer from '../../components/task/OnCreateTaskContainer';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useNavigate, useParams } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db, timestamp } from '../../utils/firebase';

const CreateTask = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  const [taskIds, setTasksIds] = useState([]);
  const navigate = useNavigate();

  //redux dispatch
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();

  //Create new task
  const submitTask = async (data) => {
    const { taskName, taskDescription } = data;
    const { startDate, endDate } = range[0];

    var task = {
      taskName: taskName,
      taskDescription: taskDescription,
      startDate: startDate,
      endDate: endDate,
    };

    const colRef = collection(db, 'tasks');
    const docRef = await addDoc(colRef, {
      taskName,
      taskDescription,
      startDate,
      endDate,
      projectId: id,
      completed: false,
      createdAt: Timestamp.now(),
    });
    setTasksIds([...taskIds, docRef.id]);
    dispatch(addTask(task));
    reset({
      taskName: '',
      taskDescription: '',
    });
  };

  return (
    <Page>
      <Container>
        <div className="w-full flex justify-between items-center">
          <section className="w-1/2 p-4 bg-white  rounded-lg dark:bg-gray-800">
            <form
              className="overflow-hidden bg-white drop-shadow-lg sm:rounded-lg px-4 py-5 sm:px-6"
              onSubmit={handleSubmit(submitTask)}
            >
              <div class="mb-6 w-full">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Task Name:
                </label>
                <input
                  {...register('taskName', { required: true, maxLength: 50 })}
                  type="text"
                  id="base-input"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Please enter a title of not more than 50 words..."
                />
                {errors.taskName && <ErrorDisplay title="task name" />}
              </div>

              <div className="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Task Description
                </label>
                <textarea
                  {...register('taskDescription', {
                    required: true,
                    maxLength: 150,
                  })}
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={`Write a description of no more than 150 words...`}
                />
                {errors.taskDescription && <ErrorDisplay title="description" />}
              </div>

              <DatePicker range={range} setRange={setRange} />
              <span>
                <Button>Add Task</Button>
              </span>
            </form>
          </section>
          <span>
            <OnCreateTaskContainer taskIds={taskIds} />
          </span>
          <div>
            <span onClick={() => navigate('/projects')}>
              <Button>
                Done <CreateNewFolderIcon fontSize="large" />
              </Button>
            </span>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default CreateTask;
