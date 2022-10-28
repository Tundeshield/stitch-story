import { Checkbox, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react';
import { Link } from 'react-router-dom';
import { toDateTime } from '../../utils/toDateTime';

const StaffTask = ({ task }) => {
  console.log('A task is', task);
  return (
    <tr
      tabindex="0"
      class="focus:outline-none h-16 border border-gray-100 rounded"
    >
      <td class="">
        <div class="flex items-center pl-5">
          <p class="text-base font-medium leading-none text-gray-700 mr-2">
            {task.taskName}
          </p>
        </div>
      </td>

      <td class="pl-5">
        <div class="flex items-center">
          <p class="text-sm leading-none  ml-2 text-green-600 py-3 px-5 bg-green-100 rounded">
            <strong className="mr-4">
              Approved Start Date:{' '}
              {task.startDate.toDate().toLocaleDateString()}
            </strong>{' '}
          </p>
        </div>
      </td>

      <td class="pl-5">
        <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
          <strong className="mr-4">Due Date: </strong>
          {task.endDate.toDate().toLocaleDateString()}
        </button>
      </td>
      <td class="pl-4">
        <Link to={`/projects/${task.projectId}`}>
          <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-blue-600 py-3 px-5 bg-blue-100 rounded hover:bg-gray-200 focus:outline-none">
            View Project Details
          </button>
        </Link>
      </td>

      <td>
        <div class="ml-5 mr-2">
          <div class="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
            <span className="text-sm">Done:</span>{' '}
            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default StaffTask;
