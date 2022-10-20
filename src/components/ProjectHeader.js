import React from 'react';

const ProjectHeader = ({ header }) => {
  return (
    <>
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {header.map((head) => (
          <li class="mr-2">
            <a
              href={head.url}
              aria-current="page"
              class="inline-block p-4 text-myBlue bg-white rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            >
              {head.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectHeader;
