'use client';

import React from 'react';
import content from '@/app/data/content.json';
import { useNews } from '@/core/contexts/NewsAndEventsViewContext';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import ArticleItem from './components/ArticleItem';
import { Button } from '@/app/components/ui/shadcn/button';
import Link from 'next/link';

const NewsPage = () => {
  const { articles, loading } = useNews();

  // Sort all articles by published date (descending) and take the top 3
  const sortedArticles = [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

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
            {content.newssection['newssection.title']}
          </p>
        )}
        <div className="flex justify-end">
          <Button className="bg-[#f9c701]">
            <Link href="/news-and-events">Read more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
