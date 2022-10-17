import React from 'react';
import Button from '../Button';
import { Input } from '../Form/Form';

const UserEditForm = () => {
  return (
    <form>
      <Input>Company Name:</Input>
      <Input>Contact Person:</Input>
      <Input>Email:</Input>
      <Input>Phone No:</Input>
      <Button>Update Details</Button>
    </form>
  );
};

export default UserEditForm;
