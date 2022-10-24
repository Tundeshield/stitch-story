import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const CommentBox = ({ handleClose }) => {
  const [comment, setComment] = useState('');
  const [sentComment, setSentComment] = useState(false);

  const postComment = (e) => {
    e.preventDefault();
    setSentComment(true);
    setComment('');
    setTimeout(() => {
      setSentComment(false);
      handleClose();
    }, 3000);
  };
  return (
    <div>
      <form onSubmit={postComment}>
        <div class="relative">
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
