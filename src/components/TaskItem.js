import React, { useState, useEffect } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RadioComp from './RadioComp';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const TaskItem = ({ taskName, id }) => {
  const [checked, setChecked] = useState(false);

  const { projectID } = useParams();

  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.log(e.target.checked);
  };
  return (
    <>
      <li>
        <span
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <span onClick={handleChange}>
            <RadioComp checked={checked} />
          </span>

          <span
            class={`flex-1 ml-3 whitespace-nowrap ${checked && 'line-through'}`}
          >
            {taskName}
          </span>
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

export default TaskItem;
