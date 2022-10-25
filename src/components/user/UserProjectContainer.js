import axios from 'axios';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';
import ProjectItem from './ProjectItem';

const UserProjectContainer = () => {
  const [userProjects, setUserProjects] = useState([{}]);
  const [client, setClient] = useState({});
  const { id } = useParams();

  const getProjects = async (id) => {
    const colRef = collection(db, 'projects');
    const q = query(colRef, where('client', '==', id));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUserProjects(data);
  };

  const getClient = async (id) => {
    const colRef = collection(db, 'clients');
    const q = query(colRef, where('id', '==', id));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setClient(data[0]);
  };
  useEffect(() => {
    // getClient(id);
    getProjects(id);
  }, []);

  return (
    <div>
      <div class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Company Projects
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Outline of the list projects by {client.companyName}.
        </p>
        <ul class="my-4 space-y-3">
          {userProjects.map((item) => (
            <span>
              <ProjectItem
                projectName={item.title}
                id={item.id}
                status={!item.status ? 'In progress' : item.status}
                key={item.id}
              />
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProjectContainer;
