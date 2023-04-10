import React, { useState, useEffect } from 'react';
import ProjectListItem from './ProjectListItem';
import Button from './Button';
import { Link } from 'react-router-dom';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import img from '../assets/images/client_default.png';
import ListComponent from './ListComponent';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const colRef = collection(db, 'projects');
      onSnapshot(colRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProjects(data);
      });
    };

    getData();
  }, []);
  console.log(projects);
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="p-4 flex justify-between items-center bg-white dark:bg-gray-900">
        <div className=" md:flex">
          <Link to="/projects/create">
            <Button>Create New Order</Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="text-xs md:py-3 px-6">
                Client Name
              </th>
              <th scope="col" className="text-xs md:py-3 px-6">
                Order Description
              </th>
              <th scope="col" className="text-xs md:py-3 px-6">
                Status
              </th>

              <th scope="col" className="text-xs md:py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="m-2 md:hidden">
        {projects.map((project) => (
          <ListComponent project={project} />
        ))}
      </div>

      {projects.length === 0 && (
        <div className="flex justify-center m-auto items-center w-5/6 mt-4">
          <img src={img} alt="checkback" />
        </div>
      )}
    </div>
  );
};

export default ProjectList;
