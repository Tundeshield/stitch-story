import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as ROUTE from '../assets/constants/routes';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import TaskModal from './TaskModal';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ListComponent = ({ project }) => {
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
    <div class="w-full p-4 mb-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex">
        <p className="text-3x mr-2">Title: </p>
        <p class="mb-2 l text-gray-900 dark:text-white">{project.title}</p>
      </div>
      <div className="flex">
        <p className="text-3x mr-2">Description:</p>
        <p class="mb-5 text-base text-gray-500 dark:text-gray-400">
          {project.description}
        </p>
      </div>

      <IconButton onClick={handleOpenProject}>
        <VisibilityIcon className="text-blue-600" />
      </IconButton>
      <IconButton onClick={handleOpen}>
        <DeleteIcon className="text-red-500" />
      </IconButton>

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
    </div>
  );
};

export default ListComponent;
