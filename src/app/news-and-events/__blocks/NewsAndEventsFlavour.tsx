import React from 'react';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/l-news-and-events-page.scss';

const NewsAndEventsFlavour: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container px-4">
        <h2 className="flavourtitle text-5xl font-bold text-left mb-4">
          {content.newsandevents['newsandevents.flavourtitle']}
        </h2>
        <p className="flavourtext text-2xl text-left leading-relaxed">
          {content.newsandevents['newsandevents.flavourtext']}
        </p>
      </div>
    </section>
  );
};

export default NewsAndEventsFlavour;
