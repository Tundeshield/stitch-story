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
import CommentBox from '../../components/CommentBox';
import { db } from '../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [error, setError] = React.useState(null);

  const getProject = async () => {
    const docRef = doc(db, 'projects', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProject(docSnap.data());
    } else {
      setError('No such document!');
    }
  };

  useEffect(() => {
    getProject();
    console.log(project);
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
                    <InfoCard id={project.id} project={project} />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <TaskContainer project={project} />
            </div>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Project;
