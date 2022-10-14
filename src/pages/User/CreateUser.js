import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import {
  Dropdown,
  EmailInput,
  Input,
  TextArea,
  UserCatDropdown,
} from '../../components/Form/Form';
import Page from '../../components/Page';
import ProjectHeader from '../../components/ProjectHeader';

const CreateUser = () => {
  const headers = [
    {
      title: 'Create User',
    },
  ];
  const options = [
    {
      id: 1,
      category: 'Staff',
    },
    {
      id: 2,
      category: 'Client',
    },
  ];
  return (
    <Page>
      <Container>
        <ProjectHeader header={headers} />
        <div className="flex  justify-between relative">
          <section className="w-3/5 p-4 bg-white   rounded-lg dark:bg-gray-800">
            <form className="overflow-hidden bg-white drop-shadow-lg sm:rounded-lg px-4 py-5 sm:px-6">
              <Input>Company Name</Input>
              <Input>First Name</Input>
              <Input>Last Name</Input>
              <EmailInput />
              <UserCatDropdown label="User category" options={options} />
              <Button>Save User</Button>
            </form>
          </section>
        </div>
      </Container>
    </Page>
  );
};

export default CreateUser;
