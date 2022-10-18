import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/freeLogo.jpeg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const UserListComp = ({ companyName, contactPerson, email, phone, id }) => {
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
        <IconButton className="ml-4">
          <DeleteIcon className="text-red-500" />
        </IconButton>
      </td>
    </tr>
  );
};

export default UserListComp;
