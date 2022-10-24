import Edit from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TaskModal from '../TaskModal';

const UserInfoCard = ({ fullName, companyName, email, phone }) => {
  const { id } = useParams();
  return (
    <div className="overflow-hidden relative bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 flex justify-between items-center sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          User Details
        </h3>
        <span>
          <IconButton>
            <Link to={`/users/update/${id}`}>
              <Edit />
            </Link>
          </IconButton>
        </span>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Company Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {companyName}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Contact Person
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {fullName}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {email}
            </dd>
          </div>
          <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone No</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {phone}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserInfoCard;
