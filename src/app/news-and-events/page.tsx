'use client';

import React, { useState } from 'react';
import content from '@/app/data/content.json';
import articlesData from '@/app/data/articles.json';
import ArticleItem from '@/app/news-and-events/articles/components/ArticleItem';
import ArticleItemMobile from '@/app/news-and-events/articles/components/ArticleItemMobile';
import TournamentCalendar from '@/app/components/layout/sections/calendar/TournamentCalendar';
import '@/core/SCSS/base/layout/l-news-and-events-page.scss';
import '@/core/SCSS/base/layout/l-calendar.scss';
// import '@/core/SCSS/base/mobile/m-news-and-events-page.scss';
import NewsAndEventsHeader from '@/app/news-and-events/__blocks/NewsAndEventsHeader';
import NewsAndEventsFlavour from '@/app/news-and-events/__blocks/NewsAndEventsFlavour';
import CTAButton from '@/app/components/ui/CTAButtons';
import TournamentCalendarMobile from '@/app/components/layout/sections/calendar/TournamentCalendarMobile';

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
      <div className="news-page-container background min-h-screen">
        <NewsAndEventsHeader />

        {articlesToDisplay.length > 0 ? (
          <div className="mb-10 w-full p-6">
            <ul className="hidden md:flex flex-col space-y-6 items-center justify-center">
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

            <ul className="flex md:hidden flex-col space-y-6 items-center justify-center">
              {articlesToDisplay.map((article) => (
                <ArticleItemMobile
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

            <div className="ctabuttons flex justify-end items-end w-full mt-4">
              <CTAButton variant="play" href="/play-now">
                Play Now
              </CTAButton>

              {articlesData.length > 3 && (
                <CTAButton
                  variant="readmore"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? 'Show Less' : 'Read More'}
                </CTAButton>
              )}
            </div>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center mt-10">
            {content.newssection['newssection.title']}
          </p>
        )}

        <div className="container p-4">
          <h2>
            <NewsAndEventsFlavour />
          </h2>
        </div>
      </div>

      <div className="tournament-calendar px-4 mb-10">
        <div className="hidden md:block">
          <TournamentCalendar />
        </div>

        <div className="block md:hidden">
          <TournamentCalendarMobile />
        </div>
      </div>
    </>
  );
};

export default NewsPage;
