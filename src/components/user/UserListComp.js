import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/freeLogo.jpeg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskModal from '../TaskModal';

const UserListComp = ({ companyName, contactPerson, email, phone, id }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    console.log(id, 'has been deleted!');
    handleClose();
  };

  return (
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <span className="flex items-center cursor-pointer">
          <Avatar src={img} sx={{ width: 56, height: 56 }} className="mr-4" />
          {companyName}
        </span>
      </th>
      <td class="py-4 px-6">{contactPerson}</td>
      <td class="py-4 px-6">{email}</td>
      <td class="py-4 px-6">{phone}</td>
      <td class="py-4 px-6">
        <Link
          to={`/view-user/${id}`}
          class="mr-4 text-blue-600 dark:text-blue-500 hover:underline"
        >
          <VisibilityIcon fontSize="small" />
        </Link>
        <IconButton className="ml-4" onClick={handleOpen}>
          <DeleteIcon className="text-red-500" />
        </IconButton>
      </td>
      <TaskModal
        open={open}
        handleClose={handleClose}
        title="Are you sure you want to delete this project?"
      >
        <span className="flex justify-between items-center">
          <button
            onClick={() => handleDelete(id)}
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
    </tr>
  );
};

export default UserListComp;
