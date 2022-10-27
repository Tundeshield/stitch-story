import { Checkbox, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react';
import { Link } from 'react-router-dom';

const StaffTask = () => {
  return (
    <tr
      tabindex="0"
      class="focus:outline-none h-16 border border-gray-100 rounded"
    >
      <td class="">
        <div class="flex items-center pl-5">
          <p class="text-base font-medium leading-none text-gray-700 mr-2">
            Marketing Keynote Presentation
          </p>
        </div>
      </td>

      <td class="pl-5">
        <div class="flex items-center">
          <p class="text-sm leading-none  ml-2 text-green-600 py-3 px-5 bg-green-100 rounded">
            <strong className="mr-4">Date Assigned: </strong> 04/07
          </p>
        </div>
      </td>

      <td class="pl-5">
        <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
          <strong className="mr-4">Due Date: </strong> 20/11
        </button>
      </td>
      <td class="pl-4">
        <Link>
          <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-blue-600 py-3 px-5 bg-blue-100 rounded hover:bg-gray-200 focus:outline-none">
            View Project Details
          </button>
        </Link>
      </td>
      <td className="pl-4 text-myBlue">
        <IconButton>
          <ChatIcon className=" text-myBlue" />
        </IconButton>
      </td>
      <td>
        <div class="ml-5">
          <div class="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default StaffTask;
