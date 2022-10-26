import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import MilestoneUpdate from './MilestoneUpdate';

const MilestoneUpdateContainer = ({ task }) => {
  const [comments, setComments] = useState([]);
  //Fetch task comments

  const fetchComments = async () => {
    const commentRef = collection(db, 'comments');
    const q = query(commentRef, where('taskId', '==', task.id));
    onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs);
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
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      {comments.length === 0 && <p>No comments yet</p>}
      {comments.map((comment) => (
        <MilestoneUpdate comment={comment} id={comment.id} key={comment.id} />
      ))}
    </ol>
  );
};

export default MilestoneUpdateContainer;
