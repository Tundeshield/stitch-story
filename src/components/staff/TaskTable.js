import { Checkbox, IconButton } from '@mui/material';
import * as React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import StaffTask from './StaffTask';
import { DoneAlert, DoneAlertSecondary } from '../Alerts';
import { Link } from 'react-router-dom';

export default function TaskTable() {
  return (
    <div class="sm:px-6 w-full">
      <div class="px-4 md:px-6 py-4 md:py-7"></div>
      <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div class="sm:flex items-center justify-between">
          <div class="flex items-center">
            <Link className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
              <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>All</p>
              </div>
            </Link>
            <Link className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
              <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Done</p>
              </div>
            </Link>
          </div>
          <div>
            <DoneAlertSecondary />
          </div>
        </div>
        <div class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <tbody>
              <StaffTask />
              <StaffTask />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
