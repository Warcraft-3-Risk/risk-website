'use client';

import React, { useState } from 'react';
import { useNews } from '@/core/contexts/NewsAndEventsViewContext';
import ArticleItem from '@/app/news-and-events/articles/components/ArticleItem';
import { Button } from '@/app/components/ui/shadcn/button';
import Link from 'next/link';
import TournamentCalendar from '@/app/components/layout/sections/calendar/TournamentCalendar';
import '@/core/SCSS/base/layout/page/l-news-and-events-page.scss';

const NewsPage = () => {
  const { articles } = useNews();
  const [showAll, setShowAll] = useState(false);

  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const articlesToDisplay = showAll
    ? sortedArticles
    : sortedArticles.slice(0, 3);

  return (
    <div className="background min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="titletext text-6xl font-bold mb-6 flex justify-center">
          News and Events
        </h1>

        {articlesToDisplay.length > 0 ? (
          <ul className="space-y-6">
            {articlesToDisplay.map((article) => (
              <ArticleItem
                key={article.id}
                id={article.id}
                title={article.title}
                publishedAt={article.publishedAt}
                author={article.author}
                tags={article.tags.join(', ')}
                text={article.text}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center mt-10">
            No articles available.
          </p>
        )}

        {articles.length > 3 && (
          <div className="flex justify-end space-x-4 mt-8">
            <Button className="PlayNowButton">
              <Link href="/play-now">Play Now</Link>
            </Button>

            <Button className="ReadMoreButton" onClick={() => setShowAll(true)}>
              Read more
            </Button>
          </div>
        )}
      </div>

      <div className="container mx-auto p-4">
        <TournamentCalendar />
      </div>
    </div>
  );
};

export default NewsPage;
