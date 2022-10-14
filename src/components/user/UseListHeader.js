import React from 'react';

const UseListHeader = () => {
  return (
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="py-3 px-6">
          Company Name
        </th>
        <th scope="col" class="py-3 px-6">
          Contact Person
        </th>
        <th scope="col" class="py-3 px-6">
          Email Address
        </th>
        <th scope="col" class="py-3 px-6">
          Phone No
        </th>
        <th scope="col" class="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default UseListHeader;
