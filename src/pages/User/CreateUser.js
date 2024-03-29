import React, { useState } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { ErrorDisplay } from '../../components/Form/Form';
import Page from '../../components/Page';
import { useForm } from 'react-hook-form';
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from 'react-firebase-hooks/auth';
import { auth, db } from '../../utils/firebase';
import LoadingButton from '../../components/task/LoadingButton';
import { ErrorAlert, SuccessAlert } from '../../components/Alerts';
import { sendPasswordResetEmail } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [user, loading, error] = useAuthState(auth);

  //Create the company
  const handleCreateUser = async (data) => {
    const { companyName, firstName, lastName, email } = data;
    //Save current user
    const originalUser = auth.currentUser;
  };

  const passwordReset = (auth, email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset sent.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Page>
      <Container>
        <div className="flex justify-between relative p-4">
          <section className="w-full md:w-3/5 p-4 bg-white rounded-lg dark:bg-gray-800">
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
                  Representative First Name
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
                  Representative Last Name
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
              <div class="mb-6 w-full">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Confirm Email
                </label>
                <input
                  {...register('confirmEmail', {
                    required: true,
                    maxLength: 30,
                  })}
                  type="text"
                  id="base-input"
                  class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {getValues('email') !== getValues('confirmEmail') && (
                  <div
                    class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span class="font-medium">Error!!</span> Kindly ensure the
                    emails match...
                  </div>
                )}
              </div>
              {loading ? (
                <LoadingButton>Saving Company ...</LoadingButton>
              ) : (
                <Button>Add company</Button>
              )}
              {error && (
                <ErrorAlert
                  primary="Oops!"
                  secondary={`Something went wrong. ${error}`}
                />
              )}
              {success && (
                <SuccessAlert
                  main="User successfully added."
                  secondary="User will get a confirmation email."
                />
              )}
            </form>
          </section>
        </div>
      </Container>
    </Page>
  );
};

export default CreateUser;
