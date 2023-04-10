import React from 'react';
import { useSelector } from 'react-redux';

const QrInfo = ({ project }) => {
  const viewedProjectClient = useSelector((state) => state.viewedProject);
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-full ">
      <div className="px-2 py-2 flex justify-between items-center sm:px-6">
        <h3 className="text-lg font-medium leading-6 break-normal text-gray-900">
          Production Contract Details
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-2 break-normal flex flex-col justify-between sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Order Title</dt>
            <dd className="mt-1 text-sm text-gray-900 break-normal sm:col-span-2 sm:mt-0">
              {project.title}
            </dd>
          </div>
          <div className="bg-white px-2 py-2 break-normal flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Company Name</dt>
            <dd className="mt-1 text-sm text-gray-900 break-normal sm:col-span-2 sm:mt-0">
              {viewedProjectClient.companyName}
            </dd>
          </div>
          <div className="bg-white-50 px-2 py-2 break-normal flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Details</dt>
            <dd className="mt-1 text-sm text-gray-900 break-normal sm:col-span-2 sm:mt-0">
              {project.description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default QrInfo;
