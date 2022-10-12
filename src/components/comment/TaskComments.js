import React from 'react';
import Button from '../Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import { CommentReply } from './CommentReply';
import { Comment } from './Comment';

export const TaskComments = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion (20)
          </h2>
        </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <Button>Post Comment</Button>
        </form>
        <Comment />
        {/* <CommentReply /> */}
      </div>
    </section>
  );
};
