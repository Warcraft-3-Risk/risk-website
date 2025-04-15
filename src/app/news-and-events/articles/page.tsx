'use client';

import React from 'react';
import content from '@/app/data/content.json';
import { useNews } from '@/core/contexts/NewsAndEventsViewContext';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import ArticleItem from './components/ArticleItem';

const NewsPage = () => {
  const { articles, loading } = useNews();

  // Sort all articles by published date (descending)
  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-black dark:text-white mb-6 flex justify-center">
          {content.newsandevents['newsandevents.title']}
        </h1>

        {loading ? (
          <LoadingSpinner />
        ) : sortedArticles.length > 0 ? (
          <ul className="space-y-6">
            {sortedArticles.map((article) => (
              <ArticleItem
                key={article.id}
                id={article.id}
                title={article.title}
                publishedAt={article.publishedAt}
                author={article.author}
                tags={article.tags}
                text={article.text}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center mt-10">
            {content.newsandevents['newsandevents.nodata']}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
