import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import {
  Dropdown,
  EmailInput,
  ErrorDisplay,
  Input,
  TextArea,
  UserCatDropdown,
} from '../../components/Form/Form';
import Page from '../../components/Page';
import ProjectHeader from '../../components/ProjectHeader';
import { useForm } from 'react-hook-form';

const CreateUser = () => {
  const headers = [
    {
      title: 'Create User',
    },
  ];
  const options = [
    {
      id: 1,
      category: 'Staff',
    },
    {
      id: 2,
      category: 'Client',
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateUser = (data) => {
    console.log(data);
  };

  return (
    <Page>
      <Container>
        <ProjectHeader header={headers} />
        <div className="flex  justify-between relative">
          <section className="w-3/5 p-4 bg-white   rounded-lg dark:bg-gray-800">
            <form
              className="overflow-hidden bg-white drop-shadow-lg sm:rounded-lg px-4 py-5 sm:px-6"
              onSubmit={handleSubmit((data) => handleCreateUser(data))}
            >
              <div class="mb-6 w-full">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Company Name
                </label>
                <input
                  {...register('companyName', {
                    required: true,
                    maxLength: 30,
                  })}
                  type="text"
                  id="base-input"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.companyName && <ErrorDisplay title="companyName" />}
              </div>
              <div class="mb-6 w-full">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  {...register('firstName', {
                    required: true,
                    maxLength: 30,
                  })}
                  type="text"
                  id="base-input"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.firstName && <ErrorDisplay title="firstName" />}
              </div>
              <div class="mb-6 w-full">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  {...register('lastName', {
                    required: true,
                    maxLength: 30,
                  })}
                  type="text"
                  id="base-input"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.lastName && <ErrorDisplay title="lastName" />}
              </div>
              <div class="mb-6 w-full">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  {...register('email', {
                    required: true,
                    maxLength: 30,
                  })}
                  type="text"
                  id="base-input"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.email && <ErrorDisplay title="email" />}
              </div>

              <div className="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  User Category
                </label>
                <select
                  {...register('category', { required: true })}
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>User category</option>
                  {options.map((option) => (
                    <option value={option.id}>{option.category}</option>
                  ))}
                </select>
                {errors.category && <ErrorDisplay title="category" />}
              </div>

              <Button>Save User</Button>
            </form>
          </section>
        </div>
      </Container>
    </Page>
  );
};

export default CreateUser;
