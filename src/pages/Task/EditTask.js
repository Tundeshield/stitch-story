import axios from 'axios';
import { addDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container';
import DatePicker from '../../components/DatePicker';
import { ErrorDisplay } from '../../components/Form/Form';
import Page from '../../components/Page';
import { addTask } from '../../features/task/taskSlice';

const EditTask = () => {
  const { id } = useParams('id');
  const navigate = useNavigate();

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
    reset,
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

    var task = {
      taskName: taskName,
      taskDescription: taskDescription,
      supervisor: supervisor,
      startDate: startDate,
      endDate: endDate,
    };

    //dispatch tasks... set to database eventually.
    dispatch(addTask(task));

    //Navigate back to the project page
    navigate(-1);
  };

  return (
    <Page>
      <Container>
        <section className="w-3/5 p-4 bg-white   rounded-lg dark:bg-gray-800">
          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                  name="Profile"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                >
                  Update Task
                </button>
              </li>
            </ul>
          </div>
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
                    {...register('taskName', { required: true, maxLength: 20 })}
                    type="text"
                    id="base-input"
                    class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please enter a title of not more than 20 words..."
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
                      maxLength: 60,
                    })}
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={`Write a description of no more than 60 words...`}
                  />
                  {errors.taskDescription && (
                    <ErrorDisplay title="description" />
                  )}
                </div>

                <div className="mb-6">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Task Supervisor
                  </label>
                  <select
                    {...register('supervisor', {
                      required: true,
                    })}
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a supervisor</option>
                    {staff.map((option) => (
                      <option key={option.id} value={option.id}>{option.companyName}</option>
                    ))}
                  </select>
                  {errors.supervisor && <ErrorDisplay title="description" />}
                </div>

                <DatePicker range={range} setRange={setRange} />
                <span>
                  <Button>Update Task</Button>
                </span>
              </form>
            </section>
          </div>
        </section>
      </Container>
    </Page>
  );
};

export default EditTask;
