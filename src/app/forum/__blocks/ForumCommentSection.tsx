import React from 'react';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface ForumCommentSectionProps {
  title: string;
  comments: Comment[];
}

const ForumCommentSection: React.FC<ForumCommentSectionProps> = ({
  title,
  comments,
}) => {
  return (
    <section className="forum-comment-section mt-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForumCommentSection;
