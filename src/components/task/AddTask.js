import React, { useEffect, useState } from 'react';
import Button from '../Button';
import DatePicker from '../DatePicker';
import { Dropdown, Input, TextArea } from '../Form/Form';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';
import { addDays } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask, removeTask } from '../../features/task/taskSlice';

const AddTask = () => {
  const [staff, setStaff] = useState([]);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  //redux dispatch
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      const data = response.data.filter(
        (user) => user.companyName === 'Weaveworx Limited',
      );

      setStaff(data);
    });
  }, []);

  const submitTask = (data) => {
    const { taskName, taskDescription, supervisor } = data;
    const { startDate, endDate } = range[0];

    const tasks = {
      taskName: taskName,
      taskDescription: taskDescription,
      supervisor: supervisor,
      startDate: startDate,
      endDate: endDate,
    };

    dispatch(addTask(tasks));
  };

  return (
    <div className="w-full">
      <section className="w-full p-4 bg-white  rounded-lg dark:bg-gray-800">
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
              {...register('taskName')}
              type="text"
              id="base-input"
              class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Task Description
            </label>
            <textarea
              {...register('taskDescription')}
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`Write a description ...`}
            />
          </div>

          <div className="mb-6">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Task Supervisor
            </label>
            <select
              {...register('supervisor')}
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a supervisor</option>
              {staff.map((option) => (
                <option value={option.id}>{option.companyName}</option>
              ))}
            </select>
          </div>

          <DatePicker range={range} setRange={setRange} />
          <span>
            <Button>
              Save Task <AddCircleOutlineIcon />
            </Button>
          </span>
        </form>
      </section>
    </div>
  );
};

export default AddTask;
