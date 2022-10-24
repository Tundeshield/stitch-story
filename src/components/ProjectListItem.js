import { IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TaskModal from './TaskModal';
import * as ROUTE from '../assets/constants/routes';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ProjectListItem = ({ project }) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleOpenProject = () => {
    navigate(`${ROUTE.PROJECTS}/${project.id}`);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async (id) => {
    console.log(id, 'has been deleted!');
    try {
      setLoading(true);
      await deleteDoc(doc(db, 'projects', id));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    navigate(ROUTE.PROJECTS);
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
          {project.title}
        </th>
        <td className="py-4 px-6">{project.description.substring(0, 30)}...</td>
        <td className="py-4 px-6">
          <StatusBadge
            status={project.status ? project.status : 'In progress'}
          />
        </td>
        <td className="py-4 px-6">
          <IconButton onClick={handleOpenProject}>
            <VisibilityIcon className="text-blue-600" />
          </IconButton>
          <IconButton onClick={handleOpen}>
            <DeleteIcon className="text-red-500" />
          </IconButton>
        </td>
      </tr>
      <TaskModal
        open={open}
        handleClose={handleClose}
        title="Are you sure you want to delete this project?"
      >
        <span className="flex justify-between items-center">
          <button
            onClick={() => handleDelete(project.id)}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Yes
          </button>

          <button
            onClick={handleClose}
            type="button"
            class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            No
          </button>
        </span>
      </TaskModal>
    </>
  );
};

export default ProjectListItem;
