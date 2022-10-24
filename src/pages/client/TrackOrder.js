import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MilestoneAccordion from '../../components/client/MilestoneAccordion';
import ProjectInfoCard from '../../components/client/ProjectInfoCard';
import Container from '../../components/Container';
import Page from '../../components/Page';
import { db } from '../../utils/firebase';

const TrackOrder = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([{}]);

  const getTasks = async () => {
    const tasksRef = collection(db, 'tasks');
    const q = query(tasksRef, where('projectId', '==', id));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTasks(data);
  };

  const getProject = async () => {
    const docRef = doc(db, 'projects', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProject({ id: docSnap.id, ...docSnap.data() });
    } else {
      console.log('No such document!');
    }
  };

  useEffect(() => {
    getProject();
    getTasks();
  }, []);
  console.log(project);

  return (
    <Page>
      <Container>
        <div className=" h-full w-1/2 mx-auto">
          <div>
            <ProjectInfoCard project={project} />
          </div>
          <div>
            <MilestoneAccordion tasks={tasks} />
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default TrackOrder;
