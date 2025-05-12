import React from 'react';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/page/p-news-and-events-page.scss';

const NewsAndEvents = content.newsandevents;
const NewsAndEventsFlavour: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container px-4">
        <h2 className="flavourtitle text-5xl font-bold text-left mb-4">
          {NewsAndEvents['newsandevents.flavourtitle']}
        </h2>
        <p className="flavourtext text-2xl text-left leading-relaxed">
          {NewsAndEvents['newsandevents.flavourtext']}
        </p>
      </div>
    </section>
  );
};

export default NewsAndEventsFlavour;
