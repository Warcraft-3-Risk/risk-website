import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';

const WatchUsSection: React.FC = () => {
  return (
    <section className="WatchUs_Block bg-gray-300 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="WatchUs_Text text-4xl font-bold justify-start flex">
          {content.watchus['watchus.title']}
        </h2>
        <p className="text-lg flex justify-start">
          {content.watchus['watchus.subtitle']}
        </p>
        <p className="text-lg mb-8 flex justify-start">
          {content.watchus['watchus.description']}
        </p>
        <div className="flex gap-8 justify-start font-bold">
          <p>{content.watchus['watchus.liveTagline']}</p>
        </div>
        <div className="flex gap-8 justify-start">
          <Image
            src="/images/Youtube.webp"
            alt="YouTube"
            width={76}
            height={60}
          />
          <Image
            src="/images/twitch-icon.svg"
            alt="Twitch"
            width={60}
            height={60}
          />
        </div>
      </div>
    </section>
  );
};

export default WatchUsSection;
