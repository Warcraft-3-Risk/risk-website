import React from 'react';

interface ForumHeaderProps {
  title: string;
  description: string;
}

const ForumHeader: React.FC<ForumHeaderProps> = ({ title, description }) => {
  return (
    <header className="bg-blue-600 text-white p-6 text-center rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-lg">{description}</p>
    </header>
  );
};

export default ForumHeader;
