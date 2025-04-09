'use client';

import React, { useState, useEffect } from 'react';
import content from '@/app/data/content.json';
import ArticleItem from '@/app/news-and-events/__blocks/ArticleItem';
import LoadingSpinner from '@/app/news-and-events/__blocks/LoadingSpinner';

interface Article {
  id: number;
  title: string;
  tags: string;
  author: string;
  text: string;
}

const NewsAndEventsPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        //TODO: Fix this when we use firebase
        const response = await fetch('/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Failed to load articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
          {content.newsandevents['newsandevents.title']}
        </h1>

        {loading ? (
          <LoadingSpinner />
        ) : articles.length > 0 ? (
          <ul>
            {articles.map(({ id, title, author, text, tags }) => (
              <ArticleItem
                key={id}
                title={title}
                author={author}
                tags={tags}
                text={text}
                id={0}
              />
            ))}
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
