import React from 'react';

const MilestoneUpdate = ({ comment }) => {
  console.log(comment);

  return (
    <>
      <li class="mb-10 ml-4 border p-4 rounded-lg">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className="flex flex-col">
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Date Posted: {comment.timePosted.toDate().toLocaleDateString()}
          </time>
          <time class="mb-0 text-sm font-normal leading-none text-myBlue dark:text-gray-500">
            Time Posted: {comment.timePosted.toDate().toLocaleTimeString()}
          </time>
        </div>
        <p class=" text-md pl-2  text-gray-400 dark:text-gray-600 mt-4">
          {comment.sender} said:
        </p>
        <p class="text-lg bg-blue-700 p-4 pl-5 rounded-full text-white dark:text-gray-600 mt-4">
          {comment.comment}
        </p>
      </li>
    </>
  );
};

export default MilestoneUpdate;
