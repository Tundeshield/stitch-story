import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Page from '../../components/Page';
import Container from '../../components/Container';
import {
  Input,
  Dropdown,
  TextArea,
  ErrorDisplay,
} from '../../components/Form/Form';
import axios from 'axios';
import ProjectHeader from '../../components/ProjectHeader';
import Button from '../../components/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddTask from '../../components/task/AddTask';
import DatePicker from '../../components/DatePicker';
import OnCreateTaskContainer from '../../components/task/OnCreateTaskContainer';
import Modal from '../../components/Modal';
import TaskModal from '../../components/Modal';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';
import { IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const CreateProject = () => {
  const [clients, setClient] = useState([]);
  const [open, setOpen] = React.useState(false);
  const headers = [
    {
      title: 'Create New Project',
      url: '#',
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      setClient(response.data);
    });
  }, []);

  const handleSaveProject = (data) => {
    //Get all the tasks
    // Join the tasks and form data
    // Send the data to the database
    console.log(data);
  };
  return (
    <Page>
      <Container>
        <ProjectHeader header={headers} />

        <div className="flex flex-col md:flex  justify-between relative">
          <div className="flex justify-between">
            <section className=" p-4 bg-white rounded-lg dark:bg-gray-800 md:w-full">
              <form
                className="overflow-hidden  bg-white drop-shadow-lg sm:rounded-lg px-4 py-5 sm:px-6 "
                onSubmit={handleSubmit((data) => handleSaveProject(data))}
              >
                <div class="mb-6 w-full">
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Project Title
                  </label>
                  <input
                    {...register('title', { required: true, maxLength: 30 })}
                    type="text"
                    id="base-input"
                    class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.title && <ErrorDisplay title="title" />}
                </div>
                <div className="mb-6">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Clients
                  </label>
                  <select
                    {...register('client', { required: true })}
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select customer</option>
                    {clients.map((option) => (
                      <option value={option.id}>{option.companyName}</option>
                    ))}
                  </select>
                  {errors.client && <ErrorDisplay title="customer" />}
                </div>
                <div className="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Description
                  </label>
                  <textarea
                    {...register('description', {
                      required: true,
                      maxLength: 60,
                    })}
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={`Write a description ...`}
                  />
                  {errors.description && <ErrorDisplay title="description" />}
                </div>
                <span className="flex justify-between">
                  <div className="flex">
                    <p>
                      <strong>Add New Task:</strong>{' '}
                    </p>
                    <span onClick={handleOpen} className="animate-bounce ml-4">
                      <span>
                        <p
                          type="button"
                          class="focus:outline-none text-white bg-blue-700 hover:bg-blue-700  cursor-pointer focus:ring-4 focus:ring-blue-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          <AddIcon />{' '}
                        </p>
                      </span>
                    </span>
                  </div>

                  <Button>
                    <SaveIcon /> Save New Project And Tasks
                  </Button>
                </span>
              </form>
            </section>
            <div className="pt-4 ml-6">
              <OnCreateTaskContainer />
            </div>
          </div>
          <div className="absolute left-1/4 w-3/4 ">
            <AddTask open={open} handleClose={handleClose} />
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default CreateProject;
