import { IconButton } from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert, SuccessAlert } from '../../components/Alerts';
import Button from '../../components/Button';
import { ErrorDisplay } from '../../components/Form/Form';
import LoadingButton from '../../components/task/LoadingButton';
import { auth, db } from '../../utils/firebase';
import img from '../../assets/images/loginLogo.png';
import googleIcon from '../../assets/images/googleIcon.png';
import { useDispatch } from 'react-redux';
import { logUserDetails } from '../../features/user/userSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const ProductionAdmin = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = async (data) => {
    const { email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      return setError(true);
    }
    setLoading(true);
    //Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const supervisorData = {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          role: 'admin',
        };

        const supevisorRef = doc(db, 'admins', user.uid);
        setDoc(supevisorRef, supervisorData);
        console.log('User created successfully');
        const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, supervisorData);

        //Dispatch user details to the store
        dispatch(
          logUserDetails({
            uid: user.uid,
            email: user.email,
            role: 'admin',
            fullName: data.firstName + ' ' + data.lastName,
          }),
        );

        //Navigate to the dashboard
        navigate('/projects');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <span classNameName="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img src={img} alt="" />
      </span>
      <div className="w-full p-4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Register Account
        </h2>

        <form
          className="overflow-hidden bg-white drop-shadow-lg sm:rounded-lg px-4 py-5 sm:px-6"
          onSubmit={handleSubmit((data) => handleRegister(data))}
        >
          <div className="mb-6 w-full">
            <label
              for="base-input"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.firstName && <ErrorDisplay title="firstName" />}
          </div>
          <div className="mb-6 w-full">
            <label
              for="base-input"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.lastName && <ErrorDisplay title="lastName" />}
          </div>
          <div className="mb-6 w-full">
            <label
              for="base-input"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.email && <ErrorDisplay title="email" />}
          </div>

          <div className="mb-6 w-full">
            <label
              for="password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              {...register('password', {
                required: true,
                maxLength: 30,
              })}
            />
          </div>
          <div className="mb-4">
            <label
              for="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              {...register('confirmPassword', {
                required: true,
                maxLength: 30,
              })}
            />
            {getValues('password') !== getValues('confirmPassword') && (
              <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                <span className="font-medium">Error!!</span> Kindly ensure the
                passwords match
              </div>
            )}
          </div>
          <div></div>
          <div className="flex justify-between">
            {loading ? (
              <LoadingButton>Saving Company ...</LoadingButton>
            ) : (
              <Button>Register</Button>
            )}

            <div>
              <IconButton>
                <img src={googleIcon} alt="" className="w-8" />
              </IconButton>
            </div>
          </div>
        </form>
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
      </div>
    </div>
  );
};

export default ProductionAdmin;
