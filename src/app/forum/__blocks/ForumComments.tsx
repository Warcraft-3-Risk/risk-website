import React from 'react';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface ForumCommentsProps {
  comments: Comment[];
}

const ForumComments: React.FC<ForumCommentsProps> = ({ comments }) => {
  return (
    <div className="space-y-4 mt-6">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="font-semibold">{comment.author}</p>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ForumComments;
