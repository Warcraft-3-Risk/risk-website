'use client';

import React from 'react';
import content from '@/app/data/content.json';
import ArticleItem from '@/app/news-and-events/__blocks/ArticleItem';
import LoadingSpinner from '@/app/news-and-events/__blocks/LoadingSpinner';
import { useNews } from '@/core/contexts/NewsAndEventsViewContext';

const NewsAndEventsPage = () => {
  const { articles, loading } = useNews();

  const sortedArticles = [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
          {content.newsandevents['newsandevents.title']}
        </h1>

        {loading ? (
          <LoadingSpinner />
        ) : sortedArticles.length > 0 ? (
          <ul>
            {sortedArticles.map(
              ({ id, title, author, text, tags, publishedAt }) => (
                <ArticleItem
                  key={id}
                  title={title}
                  publishedAt={publishedAt}
                  author={author}
                  tags={tags}
                  text={text}
                  id={id}
                />
              ),
            )}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            {content.newsandevents['newsandevents.nodata']}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsAndEventsPage;
