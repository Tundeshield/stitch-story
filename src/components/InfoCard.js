import { IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useSelector } from 'react-redux';
import MilestoneCarousel from './carousel/MilestoneCarousel';

const InfoCard = ({ project }) => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);
  const viewedProjectClient = useSelector((state) => state.viewedProject);

  useEffect(() => {
    const fetchClient = async () => {
      const clientRef = doc(db, 'clients', project.client);
      const clientSnap = await getDoc(clientRef);
      if (clientSnap.exists()) {
        setClient(clientSnap.data());
        setLoading(false);
      } else {
        console.log('No such document!');
      }

      console.log('Loading things', client);
    };
    fetchClient();
  }, [project]);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 flex justify-between items-center sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Production Contract Details
        </h3>
        <MilestoneCarousel />
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Project Title</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {project.title}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Company Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {loading ? 'Loading...' : viewedProjectClient.companyName}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Contact Person
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {loading ? 'Loading...' : viewedProjectClient.contactPerson}
            </dd>
          </div>
          <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {loading ? 'Loading...' : client.email}
            </dd>
          </div>
          <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Details</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {project.description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default InfoCard;
