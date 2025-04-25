'use client';

import React from 'react';
import content from '@/app/data/content.json';
import articlesData from '@/app/data/articles.json';
import ArticleItem from '@/app/news-and-events/articles/components/ArticleItem';
import { Button } from '@/app/components/ui/shadcn/button';
import Link from 'next/link';
import TournamentCalendar from '@/app/components/layout/sections/calendar/TournamentCalendar';
import '@/core/SCSS/base/layout/l-news-and-events-page.scss';
import NewsAndEventsHeader from '@/app/news-and-events/__blocks/NewsAndEventsHeader';

const NewsPage = () => {
  // Sort articles by published date descending
  const sortedArticles = [...articlesData]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  return (
    <>
      <div className="background min-h-screen p-4">
        <NewsAndEventsHeader />
        {sortedArticles.length > 0 ? (
          <ul className="space-y-6 flex flex-col items-center justify-center mb-10">
            {sortedArticles.map((article) => (
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
            <div className="ctabuttons flex justify-end space-x-4 w-full">
              <Button className="PlayNowButton">
                <p>
                  <Link href="/play-now">Play Now</Link>
                </p>
              </Button>
              <Button className="ReadMoreButton">
                <p>
                  <Link href="/news-and-events">Read more</Link>
                </p>
              </Button>
            </div>
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center mt-10">
            {content.newssection['newssection.title']}
          </p>
        )}
      </div>
      <div className="container mx-auto p-4">
        <TournamentCalendar />
      </div>
    </>
  );
};

export default NewsPage;
