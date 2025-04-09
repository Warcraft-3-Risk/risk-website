import React from 'react';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string;
  text: string;
}

const ArticleItem = ({ title, author, text, tags, publishedAt }: Article) => (
  <li className="mb-4">
    <h2 className="text-2xl font-semibold text-black dark:text-white">
      {title}
    </h2>
    <p className="text-sm text-black dark:text-white mb-3 underline">
      By {author}
    </p>
    <p className="text-sm text-black dark:text-white mt-1 mb-4 font-bold">
      Published on {new Date(publishedAt).toLocaleDateString()}
    </p>
    <p className="text-smtext-black dark:text-white mb-1 font-light">{tags}</p>
    <p className="text-gray-800 dark:text-gray-200">{text}</p>
  </li>
);

export default ArticleItem;
