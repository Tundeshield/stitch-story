import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from '../../utils/firebase';

const TaskInfoCard = ({ id }) => {
  const [task, setTask] = React.useState({}); // <--- This is the state variable
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const getData = async () => {
    const docRef = doc(db, 'tasks', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setStartDate(docSnap.data().startDate.seconds);
      setEndDate(docSnap.data().endDate.seconds);
      setTask(docSnap.data());
    } else {
      console.log('No such document!');
    }
  };

  function toDateTime(secs) {
    var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
    t.setUTCSeconds(secs);
    return t;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Task Tracking ID : <span className="text-myBlue">{id}</span>
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Task Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {task.taskName}
            </dd>
          </div>
          <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Task Details</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {task.taskDescription}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Start Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {toDateTime(startDate).toLocaleDateString()}
            </dd>
          </div>
          <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Due Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {toDateTime(endDate).toLocaleDateString()}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Order Status
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Completed
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TaskInfoCard;
