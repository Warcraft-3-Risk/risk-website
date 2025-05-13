'use client';

import CTAButton from '@/app/components/ui/CTAButtons';
import articlesData from '@/app/data/articles.json';
import content from '@/app/data/content.json';
import NewsAndEventsHeader from '@/app/news-and-events/__blocks/NewsAndEventsHeader';
import ArticleItem from '@/app/news-and-events/articles/components/ArticleItem';
import ArticleItemMobile from '@/app/news-and-events/articles/components/ArticleItemMobile';
import '@/core/SCSS/base/layout/page/p-news-and-events-page.scss';
import { useState } from 'react';

const NewsPage = () => {
  const [showAll, setShowAll] = useState(false);

  const sortedArticles = [...articlesData].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const articlesToDisplay = showAll
    ? sortedArticles
    : sortedArticles.slice(0, 3);

  const NewsAndEvents = content.newsandevents;
  const NewsSection = content.newssection;
  return (
    <>
      <div className="news-page-container background min-h-screen">
        <NewsAndEventsHeader />

        {articlesToDisplay.length > 0 ? (
          <div className=" w-full p-6">
            <ul className="hidden md:flex flex-col space-y-6 items-center justify-center">
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

            <ul className="flex md:hidden flex-col space-y-6 items-center justify-center">
              {articlesToDisplay.map((article) => (
                <ArticleItemMobile
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

            <div className="ctabuttons flex justify-end items-end w-full mt-4">
              <CTAButton variant="play" href="/play-now">
                {NewsAndEvents['newsandevents.button.play']}
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
            {NewsSection['newssection.title']}
          </p>
        )}
      </div>
    </>
  );
};

export default NewsPage;
