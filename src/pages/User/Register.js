import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { ErrorAlert, SuccessAlert } from '../../components/Alerts';
import Button from '../../components/Button';
import { ErrorDisplay } from '../../components/Form/Form';
import LoadingButton from '../../components/task/LoadingButton';
import { auth, db } from '../../utils/firebase';
import img from '../../assets/images/loginLogo.png';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import googleIcon from '../../assets/images/googleIcon.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);

  const [makeError, setMakeError] = useState(false);

  const handleRegister = async (data) => {
    const { email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      return error;
    }

    if (!error) {
      await createUserWithEmailAndPassword(email, password).then(() => {
        if (!loading) {
          const userId = auth.currentUser.uid;
          // Create user in the clients table
          const docRef = doc(db, 'clients', userId);
          const dataReg = {
            companyName: data.companyName,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          };
          //Set the user data to the clients database
          setDoc(docRef, dataReg)
            .then((docRef) => {
              console.log('Entire Document has been updated successfully');
            })
            .catch((error) => {
              console.log(error);
            });
          navigate('/orders');
        }
      });
    } else {
      return error;
    }
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
          <div className="mb-4 w-full">
            <label
              for="base-input"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.companyName && <ErrorDisplay title="companyName" />}
          </div>
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
              <Button>Register...</Button>
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

export default Register;
