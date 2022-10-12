import React from 'react';
import ProjectListItem from '../../components/ProjectListItem';
import Page from '../../components/Page';
import SideMenu from '../../components/SideMenu';
import Container from '../../components/Container';
import ListHeader from '../../components/ListHeader';
import Table from '../../components/ProjectList';
import ProjectList from '../../components/ProjectList';

const Projects = () => {
  return (
    <Page>
      <Container>
        <ProjectList />
      </Container>
    </Page>
  );
};

export default Projects;
