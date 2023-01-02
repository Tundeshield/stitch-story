import React, { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
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
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { db, timestamp } from '../../utils/firebase';
import emailjs from '@emailjs/browser';

const CreateTask = () => {
  const [supervisors, setSupervisors] = useState([]);
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

  const getSupervisorData = async () => {
    const colRef = collection(db, 'supervisors');
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,

      ...doc.data(),
    }));
    setSupervisors(data);
  };

  //Create new task
  const submitTask = async (data) => {
    const { taskName, taskDescription, supervisor } = data;
    const { startDate, endDate } = range[0];

    var task = {
      taskName: taskName,
      taskDescription: taskDescription,
      startDate: startDate,
      endDate: endDate,
      supervisor: supervisor,
    };

    const colRef = collection(db, 'tasks');
    const docRef = await addDoc(colRef, {
      taskName,
      taskDescription,
      supervisor,
      startDate,
      endDate,
      projectId: id,
      completed: false,
      timestamp: serverTimestamp(),
    });

    //Get supervisor email
    const supervisorEmail = supervisors.find(
      (supervisor) => supervisor.id === task.supervisor,
    ).email;

    //Send Email notification to supervisor
    const emailParams = {
      taskTitle: taskName,
      supervisor: supervisorEmail,
      message: taskDescription,
      startDate: startDate,
      endDate: endDate,
    };
    emailjs
      .send(
        'service_ms3fmaf',
        'template_j8bylvw',
        emailParams,
        'user_7l1U0vUgTYflZnqSMoxVG',
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setTasksIds([...taskIds, docRef.id]);
    dispatch(addTask(task));
    reset({
      taskName: '',
      taskDescription: '',
      supervisor: '',
    });
  };

  useEffect(() => {
    getSupervisorData();
  }, []);

  return (
    <Page>
      <Container>
        <div className="flex flex-col justify-between w-full items-center md:flex-row">
          <section className="w-full mb-4 md:w-1/2 p-4 bg-white  rounded-lg dark:bg-gray-800">
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
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Select task supervisor
                </label>
                <select
                  {...register('supervisor', { required: true })}
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select supervisor</option>
                  {supervisors.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.firstName} {option.lastName}
                    </option>
                  ))}
                </select>
                {errors.client && <ErrorDisplay title="customer" />}
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
          <span className="mb-4 md:mb-0">
            <OnCreateTaskContainer taskIds={taskIds} />
          </span>
          <div>
            <span onClick={() => navigate('/projects')}>
              <Button>
                Done <SaveIcon fontSize="small" />
              </Button>
            </span>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default CreateTask;
