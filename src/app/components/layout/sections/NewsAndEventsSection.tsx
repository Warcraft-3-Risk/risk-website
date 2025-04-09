import React from 'react';
import articlesData from '@/app/data/articles.json';
import Link from 'next/link';
import content from '@/app/data/content.json';

const NewsAndEventsSection: React.FC = () => {
  //Fetching the 3 most recent articles from the articles.json file.
  const recentArticles = articlesData.slice(0, 3);

  const getExcerpt = (text: string, length = 100) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  return (
    <section className="news-and-events-section bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
        {content.newsandevents['newsandevents.title']}
      </h2>
      <ul className="space-y-4">
        {recentArticles.map((article) => (
          <li
            key={article.id}
            className="border-b border-gray-200 dark:border-neutral-700 pb-4"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {getExcerpt(article.text)}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <Link
          href="/news-and-events"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {content.newsandevents['newsandevents.text']}
        </Link>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;
