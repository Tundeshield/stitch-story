import { Checkbox, IconButton } from '@mui/material';
import * as React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import StaffTask from './StaffTask';
import { DoneAlert, DoneAlertSecondary } from '../Alerts';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../utils/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import LoadingComp from '../Form/Form';
import { useSelector } from 'react-redux';
import img from '../../assets/images/supervisor_default.png';

export default function TaskTable() {
  const [taskList, setTasksList] = React.useState([]);

  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state) => state.user);

  const fetchSupervisorTasks = async () => {
    const taskRef = collection(db, 'tasks');
    const q = query(taskRef, where('supervisor', '==', user.uid));
    setLoading(true);
    const unsub = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasksList(data);
      setLoading(false);
    });
    return unsub;
  };

  React.useEffect(() => {
    fetchSupervisorTasks();
  }, []);
  console.log(taskList);
  console.log(user.uid);
  return (
    <div class="overflow-hidden sm:px-6 w-full">
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
          <table class="w-full whitespace-nowrap overflow-hidden">
            <tbody>
              {loading ? (
                <LoadingComp />
              ) : (
                taskList.map((item) => <StaffTask task={item} />)
              )}
              {taskList.length === 0 && (
                <div className="flex flex-col justify-center items-center w-5/6 mt-4 ">
                  <img src={img} alt="checkback" />
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
