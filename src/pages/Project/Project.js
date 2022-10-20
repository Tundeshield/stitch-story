import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../../components/Page';
import Container from '../../components/Container';
import ProjectHeader from '../../components/ProjectHeader';
import InfoCard from '../../components/InfoCard';
import axios from 'axios';
import TaskContainer from '../../components/task/TaskContainer';
import OnCreateTaskContainer from '../../components/task/OnCreateTaskContainer';
import TaskModal from '../../components/TaskModal';

const Project = () => {
  const { pid } = useParams();
  const [project, setProject] = useState({});
  const [error, setError] = React.useState(null);
  const { id, projectName, projectDescription, status } = project;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/projects/${pid}`)
      .then((response) => {
        setProject(response.data);
        console.log(project);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <Page>
      <Container>
        <div>
          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                  name="Profile"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                >
                  Profile
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-around">
            <div className="w-3/5">
              <div id="myTabContent">
                <div
                  class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    <InfoCard
                      id={id}
                      projectName={projectName}
                      projectDescription={projectDescription}
                      status={status}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <TaskContainer />
            </div>
          </div>
        </div>
        <div>
          <TaskModal />
        </div>
      </Container>
    </Page>
  );
};

export default Project;
