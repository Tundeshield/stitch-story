import React, { useEffect, useState } from 'react';
import RadioComp from '../RadioComp';
import { IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CommentIcon from '@mui/icons-material/Comment';
import CommentBox from '../CommentBox';
import TaskModal from '../TaskModal';
import { async } from '@firebase/util';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../utils/firebase';
import emailjs from '@emailjs/browser';
import LoadingComp from '../Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { viewedProjectDetails } from '../../features/project/projectSlice';

const TaskItem = ({ taskName, id, completed, project, supervisor }) => {
  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [client, setClient] = useState({});
  const [supervisorData, setSupervisorData] = useState({});
  const [loading, setLoading] = useState(true);
  const [supervisorLoad, setSupervisorLoad] = useState(true);
  const companyDetails = useSelector((state) => state.companyDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchClient = async () => {
      const clientRef = doc(db, 'clients', project.client);
      const clientSnap = await getDoc(clientRef);
      if (clientSnap.exists()) {
        setClient(clientSnap.data());
        dispatch(
          viewedProjectDetails({
            // ...client,
            companyName: clientSnap.data().companyName,
            companyEmail: clientSnap.data().email,
            contactPerson:
              clientSnap.data().firstName + ' ' + clientSnap.data().lastName,
          }),
        );
        setLoading(false);
      } else {
        console.log('No such document!');
      }

      console.log('Loading things', client);
    };
    fetchClient();
    fetchSupervisor();
  }, [project]);

  const fetchSupervisor = async () => {
    const supervisorRef = doc(db, 'supervisors', supervisor);
    const supervisorSnap = await getDoc(supervisorRef);

    if (supervisorSnap.exists()) {
      setSupervisorLoad(false);
      setSupervisorData(supervisorSnap.data());
    } else {
      console.log('No such document!');
    }
  };

  //Complete task function
  const handleCompletedTask = async (e) => {
    setChecked(e.target.checked);
    console.log(e.target.checked);
    //Refrence the database
    const taskCompletedRef = doc(db, 'tasks', id);
    if (e.target.checked) {
      // Set the task to completed
      await updateDoc(taskCompletedRef, {
        completed: true,
        timestamp: serverTimestamp(),
      });
      const colRef = collection(db, 'notifications');
      const docRef = await addDoc(colRef, {
        to: '+447788787372',
        body: 'Notification update'
      });

      //Send Email notification to user
      const emailParams = { taskName: taskName, clientEmail: client.email };
      emailjs
        .send(
          'service_ms3fmaf',
          'template_m9wur8m',
          emailParams,
          'user_7l1U0vUgTYflZnqSMoxVG',
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await updateDoc(taskCompletedRef, {
        completed: false,
        completedAt: null,
      });
      
      
      
      console.log(id, 'has been uncompleted!');
    }
  };

  //Delete task
  const handleDelete = async () => {
    await deleteDoc(doc(db, 'tasks', id));
    console.log(id);
  };

  //For the modal
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
            {loading ? (
              <LoadingComp />
            ) : (
              <span onClick={handleCompletedTask}>
                <RadioComp checked={checked} />
              </span>
            )}

            <span
              class={`flex flex-col flex-1 ml-7 items-start justify-center break-words ${
                checked && 'line-through'
              }`}
            >
              <span className="text-sm ">{taskName}</span>
            </span>
            <span>
              <IconButton onClick={handleOpen}>
                <CommentIcon className="text-xs text-myBlue" />
              </IconButton>
            </span>
          </div>
        </span>
        <span className="text-xs flex justify-center">
          <span className="mr-2">
            {' '}
            <i> Task supervisor :</i>{' '}
          </span>{' '}
          <span className="text-myBlue">
            {supervisorLoad ? (
              <LoadingComp />
            ) : (
              <strong>
                {' '}
                {`${supervisorData.firstName} ${supervisorData.lastName}`}
              </strong>
            )}
          </span>
        </span>
        <span className="flex justify-center space-y-2">
          <span className="flex space-x-1 ">
            <IconButton onClick={() => navigate(`/tasks/${id}`)}>
              <VisibilityIcon className=" text-myBlue " fontSize="small" />
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
        <CommentBox handleClose={handleClose} id={id} />
      </TaskModal>
    </>
  );
};

export default TaskItem;
