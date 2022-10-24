import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { ErrorDisplay } from '../../components/Form/Form';
import Page from '../../components/Page';
import { db } from '../../utils/firebase';

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getUser = async () => {
    const colRef = collection(db, 'clients');
    onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      const user = data.find((user) => user.id === id);
      setUser(user);
    });
  };

  const handleUpdateUser = async (data) => {
    const { firstName, lastName, email, phone } = data;
    try {
      setLoading(true);
      const userRef = doc(db, 'clients', id);
      // Set the "capital" field of the city 'DC'
      await updateDoc(userRef, {
        firstName,
        lastName,
        email,
        phone,
      });
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);

      setError(error.message);
    }
    navigate(`/users/${id}`);
  };

  useEffect(() => {
    getUser();
    console.log('this is the user', user);
  }, []);

  return (
    <Page>
      <Container>
        <div class="mb-8 border-b border-gray-200 dark:border-gray-700">
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
                Edit Profile
              </button>
            </li>
          </ul>
        </div>
        <div class="mb-4 border-b w-1/2 border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit((data) => handleUpdateUser(data))}>
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
                defaultValue={user.companyName}
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.companyName && <ErrorDisplay title="company name" />}
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
                defaultValue={user.firstName}
                id="base-input"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.firstName && <ErrorDisplay title="First name" />}
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
                defaultValue={user.lastName}
                type="text"
                id="base-input"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.lastName && <ErrorDisplay title="last name" />}
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
                defaultValue={user.email}
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.email && <ErrorDisplay title="email" />}
            </div>
            <div class="mb-6 w-full">
              <label
                for="base-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone no
              </label>
              <input
                {...register('phone', {
                  required: true,
                  maxLength: 30,
                })}
                type="text"
                id="base-input"
                defaultValue={user.phone}
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.phone && <ErrorDisplay title="phone" />}
            </div>

            <Button>Update Details</Button>
          </form>
        </div>
      </Container>
    </Page>
  );
};

export default UpdateUser;
