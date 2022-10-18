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

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      setCompanies(response.data);
    });
  }, []);
  return (
    <Page>
      <Container>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <UseListHeader />
            <tbody>
              {companies.map((company) => (
                <UserListComp
                  companyName={company.companyName}
                  contactPerson={`${company.firstName} ${company.lastName}`}
                  email={company.Email}
                  phone={company.phone}
                  id={company.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Page>
  );
};

export default ViewUsers;
