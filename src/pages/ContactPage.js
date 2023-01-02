import React from 'react';
import Container from '../components/Container';
import Page from '../components/Page';
import Contact from './Contact';

const ContactPage = () => {
  return (
    <div>
      <Page>
        <Container>
          <Contact />
        </Container>
      </Page>
    </div>
  );
};

export default ContactPage;
