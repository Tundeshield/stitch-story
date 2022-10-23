import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import img from '../assets/images/loginLogo.png';
import Button from '../components/Button';
import { SuccessAlert } from '../components/Feedback';
import { updatePassword, reauthenticateWithCredential } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { ErrorDisplay } from '../components/Form/Form';
import { useAuthState } from 'react-firebase-hooks/auth';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [success, setSuccess] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleResetPassword = (data) => {
    const { password, confirmPassword, email } = data;
    console.log(password, confirmPassword);

    //Update password
    updateWithNewPassword(user, password);
    setSuccess(true);
    navigate('/orders');
  };

  const updateWithNewPassword = (user, newPassword) => {
    updatePassword(user, newPassword)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img src={img} alt="" />
        </span>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>

          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit((data) => handleResetPassword(data))}
          >
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                {...register('password', {
                  required: true,
                  maxLength: 30,
                })}
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                {...register('confirmPassword', {
                  required: true,
                  maxLength: 30,
                })}
              />
              {getValues('password') !== getValues('confirmPassword') && (
                <div
                  class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <span class="font-medium">Error!!</span> Kindly ensure the
                  emails match...
                </div>
              )}
            </div>

            <Button>Reset password</Button>
            {success && (
              <SuccessAlert
                main="Password updated."
               
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
