import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { IconButton } from '@mui/material';

const OnCreateTaskItem = ({ item }) => {
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    console.log(id);
  };

  return (
    <>
      <li>
        <span
          href="#"
          class="flex justify-between items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <div className="flex flex-col">
            <span class={`flex-1 ml-3 whitespace-nowrap}`}>
              {item.taskName}
            </span>
          </div>
          <IconButton onClick={() => handleDelete(item.id)}>
            <DeleteForeverIcon className="text-xs text-red-600 dark:text-red-500" />
          </IconButton>
        </span>
      </li>
    </>
  );
};

export default OnCreateTaskItem;
