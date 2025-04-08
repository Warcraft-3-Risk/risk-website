'use client';

import React, { useState } from 'react';
import articlesData from '@/app/data/articles.json';

const NewsAndEventsPage = () => {
  const [articles] = useState(articlesData);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
          News and Events
        </h1>
        {articles.length > 0 ? (
          <ul>
            {articles.map((article) => (
              <li key={article.id} className="mb-4">
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  By {article.author}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {article.text}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Stay tuned for the latest news and upcoming events. Check back soon
            for updates!
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsAndEventsPage;
