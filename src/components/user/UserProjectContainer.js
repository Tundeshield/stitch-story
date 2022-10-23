import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';

const UserProjectContainer = () => {
  const [userProjects, setUserProjects] = useState([{}]);

  useEffect(() => {
    axios.get('http://localhost:3000/projects').then((response) => {
      setUserProjects(response.data);
    });
  }, []);
  return (
    <div>
      <div class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Company Projects
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Outline of the list projects by Weaveworx.
        </p>
        <ul class="my-4 space-y-3">
          {userProjects.map((item) => (
            <span>
              <ProjectItem
                projectName={item.projectName}
                id={item.id}
                status={item.status}
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
