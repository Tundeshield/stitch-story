import { IconButton } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useParams, useNavigate } from 'react-router-dom';
import StatusBadge from './StatusBadge';

const ProjectListItem = ({ id, projectName, projectDescription, status }) => {
  const navigate = useNavigate();

  const handleOpenProject = () => {
    navigate(`/projects/${id}`);
    console.log(id);
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4 w-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {projectName}
        </th>
        <td className="py-4 px-6">
          {projectDescription.substring(0, 10) + '...'}
        </td>
        <td className="py-4 px-6">
          <StatusBadge status={status} />
        </td>
        <td className="py-4 px-6">
          <IconButton onClick={handleOpenProject}>
            <OpenInNewIcon className="text-blue-600" />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon className="text-red-500" />
          </IconButton>
        </td>
      </tr>
    </>
  );
};

export default ProjectListItem;
