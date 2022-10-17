import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ projectName, status, id }) => {
  return (
    <>
      <li>
        <span
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <span class={`flex-1 ml-3  '}`}>{projectName}</span>
          <Link
            to={id}
            className="text-xs text-blue-600 dark:text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </span>
      </li>
    </>
  );
};

export default ProjectItem;
