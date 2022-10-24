import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UseListHeader from '../../components/user/UseListHeader';
import UserListComp from '../../components/user/UserListComp';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as ROUTE from '../../assets/constants/routes';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ViewUsers = () => {
  const [companies, setCompanies] = useState([]);
  const [open, setOpen] = React.useState(false);

  const getData = () => {
    const colRef = collection(db, 'clients');
    onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setCompanies(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Page>
      <Container>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <Link to={ROUTE.CREATEUSER}>
            <Button>Create New USER</Button>
          </Link>

          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {companies.map((company) => (
                <UserListComp company={company} id={company.id} />
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Page>
  );
};

export default ViewUsers;
