import React, { useEffect, useState } from 'react';
import Button from '../Button';
import DatePicker from '../DatePicker';
import { Dropdown, Input, TextArea } from '../Form/Form';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';

const AddTask = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      const data = response.data.filter(
        (user) => user.companyName === 'Weaveworx Limited',
      );
      console.log(data);
      setStaff(data);
    });
  }, []);

  return (
    <div className="w-full">
      <section className="w-full p-4 bg-white  rounded-lg dark:bg-gray-800">
        <form className="overflow-hidden bg-white drop-shadow-lg sm:rounded-lg px-4 py-5 sm:px-6">
          <Input>Task Name</Input>
          <TextArea label="Task Description" />
          <Dropdown label="Task supervisor" options={staff} />
          <DatePicker />
          <span>
            <Button>
              Save Task <AddCircleOutlineIcon />
            </Button>
          </span>
        </form>
      </section>
    </div>
  );
};

export default AddTask;
