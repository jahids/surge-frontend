import React, { useEffect } from 'react';
import SingleComment from './SingleComment';

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

interface CommentContainerProps {
    comments: Comment[];
    userList: User[];
}

const CommentContainer = ({
    comments,
    userList,
    update
}: any) => {

    useEffect(() => { }, [update]);

    return (
        <div className="bg-white my-1 rounded-lg shadow-lg">
            {comments.map((comment) => (
                <SingleComment
                    key={comment.text}
                    comment={comment}
                    userList={userList}
                />
            ))}
        </div>
    );
};

export default CommentContainer;
