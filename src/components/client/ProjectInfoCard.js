import React from 'react';
import Button from '../Button';
import image from '../../assets/images/freeLogo.jpeg';
import { Avatar, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';

const ProjectInfoCard = ({ project }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="p-2 shadow-sm shadow-blue-100 h-64 flex flex-col justify-around mb-4 bg-white rounded-md">
      <section className="p-4 flex items-center justify-between">
        <span>
          <p>
            <strong>{project.title}</strong>{' '}
          </p>
          <p className="text-xs flex-wrap">{project.description}</p>
        </span>
        <span className="flex flex-col items-center">
          <Avatar
            src={image}
            sx={{ width: 56, height: 56 }}
            className="ml-4 mb-1"
          />
          <h3>
            <strong>Company name</strong>{' '}
          </h3>
        </span>
      </section>
      <section className="border-t-2 border-grey-200 flex justify-between p-4 items-center">
        <div className="w-1/2">
          <p className="text-xs flex-wrap">
            Send a message to the production team handling your project.
          </p>
        </div>
        <div>
          <Button>
            Message team <SendIcon className="ml-2" />{' '}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectInfoCard;
