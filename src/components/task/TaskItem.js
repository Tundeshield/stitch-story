import React, { useState } from 'react';
import RadioComp from '../RadioComp';
import { IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CommentIcon from '@mui/icons-material/Comment';
import CommentBox from '../CommentBox';
import TaskModal from '../TaskModal';

const TaskItem = ({ taskName, id }) => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const { tid } = useParams();
  const navigate = useNavigate();

  const handleCompletedTask = (e) => {
    setChecked(e.target.checked);
    console.log(e.target.checked);
  };

  const handleDelete = () => {
    console.log('Item deleted.');
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <li className="flex flex-col">
        <span
          href="#"
          class="flex flex-col  justify-between p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <div className="flex justify-between items-center">
            <span onClick={handleCompletedTask}>
              <RadioComp checked={checked} />
            </span>

            <span
              class={`flex flex-col flex-1 ml-7 items-start justify-center  whitespace-nowrap ${
                checked && 'line-through'
              }`}
            >
              <span className="text-sm">{taskName}</span>
            </span>
            <span>
              <IconButton onClick={handleOpen}>
                <CommentIcon className="text-xs text-myBlue" />
              </IconButton>
            </span>
          </div>
        </span>
        <span className="flex justify-center space-y-2">
          <span className="flex space-x-1 ">
            <IconButton onClick={() => navigate(`/tasks/${id}`)}>
              <VisibilityIcon className=" text-myBlue " fontSize="small" />
            </IconButton>
            <IconButton onClick={() => navigate(`/tasks/edit/${id}`)}>
              <EditIcon className=" text-blue-500" fontSize="small" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon className=" text-myRed" fontSize="small" />
            </IconButton>
          </span>
        </span>
      </li>
      <TaskModal
        open={open}
        handleClose={handleClose}
        title="Update the customer about the task..."
      >
        <CommentBox />
      </TaskModal>
    </>
  );
};

export default TaskItem;
