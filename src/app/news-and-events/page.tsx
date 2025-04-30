'use client';

import React, { useState } from 'react';
import content from '@/app/data/content.json';
import articlesData from '@/app/data/articles.json';
import ArticleItem from '@/app/news-and-events/articles/components/ArticleItem';
import TournamentCalendar from '@/app/components/layout/sections/calendar/TournamentCalendar';
import '@/core/SCSS/base/layout/l-news-and-events-page.scss';
import '@/core/SCSS/base/layout/l-calendar.scss';
// import '@/core/SCSS/base/mobile/m-news-and-events-page.scss';
import NewsAndEventsHeader from '@/app/news-and-events/__blocks/NewsAndEventsHeader';
import NewsAndEventsFlavour from '@/app/news-and-events/__blocks/NewsAndEventsFlavour';
import CTAButton from '@/app/components/ui/CTAButtons';

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
          <ul className="space-y-6 flex flex-col items-center justify-center mb-10 w-full p-6">
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
            <div className="ctabuttons flex justify-end items-end w-full">
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
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center mt-10">
            {content.newssection['newssection.title']}
          </p>
        )}
        <div>
          <div className="container p-4">
            <h2>
              <NewsAndEventsFlavour />
            </h2>
          </div>
        </div>
      </div>

      <div className="tournament-calendar hidden">
        <TournamentCalendar />
      </div>
    </>
  );
};

export default NewsPage;
