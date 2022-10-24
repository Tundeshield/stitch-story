import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import MilestoneUpdate from './MilestoneUpdateContainer';
import MilestoneUpdateContainer from './MilestoneUpdateContainer';
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../utils/firebase';

const Milestone = ({ task }) => {
  const [comments, setComments] = useState([]);
  //Fetch task comments

  const fetchComments = async () => {
    const commentRef = collection(db, 'comments');
    const q = query(commentRef, where('taskId', '==', task.id));
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setComments(data);
    });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="mb-4">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-myBlue" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {task.completed ? (
            <CheckCircleIcon className="text-myDarkBlue mr-2" />
          ) : (
            <PendingActionsIcon className="text-red-400 mr-2" />
          )}

          <Typography>{task.taskName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MilestoneUpdateContainer comments={comments} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Milestone;
