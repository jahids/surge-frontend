import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Example icon from React Icons
import { instance } from '../../lib/AxiosInstance';

function CommentBox({ postId, updater }: any) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSendClick = () => {
    // Implement your send functionality here
    if (!comment.trim().length) {
      return;
    }
    const commentData =
    {
      "text": comment,
      "links": ["test.com"]
    };
    // alert(`Sending comment: ${comment}`);
    instance.post(`/social/post/${postId}/comment`, commentData)
      .then(res => {
        updater();
        setComment('');
      })
      .catch(er => {
        console.log(`failed to add comment : `, er);
      });
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-lg mt-2">
      <div className="flex items-center space-x-2">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Write your comment..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 flex items-center justify-center"
          onClick={handleSendClick}
        >
          <FaPaperPlane className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default CommentBox;
