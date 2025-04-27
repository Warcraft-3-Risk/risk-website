'use client';

import React, { useState } from 'react';
import content from '@/app/data/content.json';
import articlesData from '@/app/data/articles.json';
import ArticleItem from '@/app/news-and-events/articles/components/ArticleItem';
import { Button } from '@/app/components/ui/shadcn/button';
import Link from 'next/link';
import TournamentCalendar from '@/app/components/layout/sections/calendar/TournamentCalendar';
import '@/core/SCSS/base/layout/l-news-and-events-page.scss';
import NewsAndEventsHeader from '@/app/news-and-events/__blocks/NewsAndEventsHeader';
import NewsAndEventsFlavour from '@/app/news-and-events/__blocks/NewsAndEventsFlavour';

const NewsPage = () => {
  const [showAll, setShowAll] = useState(false);

  // Sort articles by published date descending
  const sortedArticles = [...articlesData].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const articlesToDisplay = showAll
    ? sortedArticles
    : sortedArticles.slice(0, 3);
  return (
    <>
      <div className="background min-h-screen p-4">
        <NewsAndEventsHeader />

        {articlesToDisplay.length > 0 ? (
          <ul className="space-y-6 flex flex-col items-end justify-end mb-10">
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

            <div className="ctabuttons flex justify-end items-end space-x-4 w-fit">
              <Button className="PlayNowButton">
                <p>
                  <Link href="/play-now">Play Now</Link>
                </p>
              </Button>

              {articlesData.length > 3 && (
                <Button
                  className="ReadMoreButton"
                  onClick={() => setShowAll(!showAll)}
                >
                  <p>{showAll ? 'Show Less' : 'Read More'}</p>
                </Button>
              )}
            </div>
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center mt-10">
            {content.newssection['newssection.title']}
          </p>
        )}
        <div>
          <div className="container mx-auto p-4">
            <h2>
              <NewsAndEventsFlavour />
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <TournamentCalendar />
      </div>
    </>
  );
};

export default NewsPage;
