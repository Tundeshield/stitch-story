import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db, storage } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { useParams } from 'react-router-dom';

const CommentBox = ({ handleClose, id }) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const [sentComment, setSentComment] = useState(false);
  const [file, setFile] = useState(null);
  const projectId = useParams();

  const user = useSelector((state) => state.user);

  const productionImageUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
    console.log(projectId);
  };

  const postComment = async (e) => {
    e.preventDefault();
    if (comment === '') {
      setError(true);
      return;
    } else {
      const docRef = await addDoc(collection(db, 'comments'), {
        sender: user.fullName,
        senderRole: user.role,
        comment: comment,
        timestamp: serverTimestamp(),
        taskId: id,
      });

      //store image in storage with project id
      if (file) {
        const storageRef = ref(
          storage,
          `projectImages/${projectId.id}/${file.name}`,
        );
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(uploadTask.ref);
        console.log(downloadUrl);
      }

      setSentComment(true);
    }
    setError(false);
    // Add a new document with a generated id.
    setSentComment(true);
    setComment('');
    if (comment) {
      setTimeout(() => {
        setSentComment(false);
        handleClose();
      }, 3000);
    }
  };

  return (
    <div>
      <form onSubmit={postComment}>
        <div class="relative mb-6">
          <input
            type="text"
            value={comment}
            class="block p-4 pl-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Post task comment..."
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <SendIcon className="text-white" />
          </button>
        </div>
        <input type="file" onChange={productionImageUpload} />
        {error && (
          <div
            class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span class="font-medium">Error!</span> Please enter a comment.
          </div>
        )}
      </form>
      {sentComment && (
        <div
          className="p-4 mt-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span class="font-medium">Comment sent!</span> Click outside the box
          to continue...
        </div>
      )}
    </div>
  );
};

export default CommentBox;
