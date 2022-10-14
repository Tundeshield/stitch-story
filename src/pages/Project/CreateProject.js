import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Page from '../../components/Page';
import Container from '../../components/Container';
import { Input, Dropdown, TextArea } from '../../components/Form/Form';
import axios from 'axios';
import ProjectHeader from '../../components/ProjectHeader';
import Button from '../../components/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddTask from '../../components/task/AddTask';
import DatePicker from '../../components/DatePicker';
import OnCreateTaskContainer from '../../components/task/OnCreateTaskContainer';
import Modal from '../../components/Modal';
import TaskModal from '../../components/Modal';
import AddIcon from '@mui/icons-material/Add';

const CreateProject = () => {
  const [clients, setClient] = useState([]);
  const [open, setOpen] = React.useState(false);
  const headers = [
    {
      title: 'Create New Project',
      url: '#',
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      setClient(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <Page>
      <Container>
        <ProjectHeader header={headers} />

        <div className="flex  justify-between relative">
          <section className="w-3/5 p-4 bg-white   rounded-lg dark:bg-gray-800">
            <form className="overflow-hidden bg-white drop-shadow-lg sm:rounded-lg px-4 py-5 sm:px-6">
              <Input>Project Title</Input>
              <Dropdown label="Client Name" options={clients} />
              <TextArea label="Project Description" />
            </form>
          </section>
          <div className="pt-4">
            <OnCreateTaskContainer />
          </div>
          <div className="absolute left-1/4 w-3/4 ">
            <TaskModal open={open} handleClose={handleClose}>
              <AddTask />
            </TaskModal>
          </div>
        </div>
        <span onClick={handleOpen} className="mt-12">
          <Button>
            Add A New Task <AddIcon fontSize="small" />{' '}
          </Button>
        </span>
      </Container>
    </Page>
  );
};

export default CreateProject;
