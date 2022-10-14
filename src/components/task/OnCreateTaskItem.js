import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const OnCreateTaskItem = ({ taskName, id, supervisor }) => {
  const [checked, setChecked] = useState(false);

  const { projectID } = useParams();

  return (
    <>
      <li>
        <span
          href="#"
          class="flex justify-between items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <div className="flex flex-col">
            <span class={`flex-1 ml-3 whitespace-nowrap}`}>{taskName}</span>
            <p className="text-xs ml-3 text-blue-500">
              {' '}
              Supervisor: {supervisor}
            </p>
          </div>
          <div>
            <Link
              to={id}
              className="text-xs pr-6 text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </Link>
            <Link to={id} className="text-xs text-red-600 dark:text-red-500">
              <DeleteForeverIcon />
            </Link>
          </div>
        </span>
      </li>
    </>
  );
};

export default OnCreateTaskItem;
