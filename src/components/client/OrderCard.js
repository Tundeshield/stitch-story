import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import TimelineIcon from '@mui/icons-material/Timeline';
import SendIcon from '@mui/icons-material/Send';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';

const OrderCard = ({ order }) => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex flex-col justify-between mb-8 drop-shadow-lg h-80 bg-white rounded-2xl  w-full lg:w-4/5">
      <div className="flex justify-between p-3 bg-white border-b-2 border-gray-200 rounded shadow-sm items-center">
        <div className="hidden md:flex flex-col ">
          <span className="text-sm text-myDarkBlue">ORDER PLACED</span>{' '}
          <span className="text-xs text-myBlue">16 October 2022</span>
        </div>
        <div>
          <Link to="#" className="text-sm text-myDarkBlue">
            View order details
          </Link>
          <p className="text-xs text-myBlue">ORDER # {order.id}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-3 md:flex-row">
        <div>
          <h1 className="text-myDarkBlue">
            <strong>{order.title}</strong>{' '}
          </h1>
          <p className="mb-4 text-sm text-gray-500">
            Due to be completed on the 16th, march, 2022
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <Button>
            <Link to={`/orders/${order.id}`}>
              Track your project <TimelineIcon className="ml-4" />
            </Link>
          </Button>
          <Button>
            <Link to={`/client/chat/${user.uid}`}>
              Email team <SendIcon className="ml-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden md:block p-3 rounded-b-3xl border-t-2 border-gray-200">
        <p>
          <span className="text-green-500">Recent:</span>{' '}
          <span className="text-sm">Order Shipped </span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
