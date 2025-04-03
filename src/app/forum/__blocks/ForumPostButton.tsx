import React from 'react';

interface ForumPostButtonProps {
  onClick: () => void;
}

const ForumPostButton: React.FC<ForumPostButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-400 transition-all duration-300"
      onClick={onClick}
    >
      Create New Post
    </button>
  );
};

export default ForumPostButton;
