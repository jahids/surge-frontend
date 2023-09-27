import React from 'react';
import { calculateAccountAge } from '../../Utils/converter';

interface Comment {
    text: string;
    user_id: number;
    time: string;
}

interface User {
    id: number;
    name: string;
    pfp: string;
}

interface SingleCommentProps {
    comment: Comment;
    userList: User[];
}

const SingleComment: React.FC<SingleCommentProps> = ({ comment, userList }) => {
    // Find the user associated with the comment
    const user = userList.find((user) => user._id === comment.user_id);
    return (
        // <div className="bg-white p-4 my-2 rounded-lg shadow-lg">
        <div className='mb-2 border-b-2 p-4'>
            <div className="flex items-center mb-2">
                <img
                    src={user?.pfp}
                    alt={user?.name}
                    className="h-8 w-8 rounded-full object-cover mr-2"
                />
                <span className="font-semibold text-gray-800">{user?.name}</span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
            <p className="text-gray-500 text-sm mt-2">{calculateAccountAge(comment.time)} ago</p>
        </div>
    );
};

export default SingleComment;
