import React from 'react';

interface Article {
  id: number;
  title: string;
  author: string;
  tags: string;
  text: string;
}

const ArticleItem = ({ title, author, text, tags }: Article) => (
  <li className="mb-4">
    <h2 className="text-xl font-semibold text-black dark:text-white">
      {title}
    </h2>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">By {author}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{tags}</p>
    <p className="text-gray-600 dark:text-gray-400">{text}</p>
  </li>
);

export default ArticleItem;
