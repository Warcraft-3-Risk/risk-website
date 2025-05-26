'use client';

import { Button } from '@/app/components/ui/shadcn/button';
import ArticleItem from '@/app/news-and-events/articles/components/ArticleItem';
import TournamentCalendar from '@/app/tournament/__blocks/TournamentCalendar';
import { useNews } from '@/core/contexts/NewsAndEventsViewContext';
import '@/core/SCSS/base/layout/page/p-news-and-events-page.scss';
import Link from 'next/link';
import { useState } from 'react';

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
                imageUrl={article.imageUrl}
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
              <Link href="https://github.com/Warcraft-3-Risk/wc3-risk-system/releases/download/2.84/Risk.Europe.2.84.w3x">
                Play Now
              </Link>
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
