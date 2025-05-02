import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';

const WatchUsSection: React.FC = () => {
  return (
    <section className="WatchUs_Block bg-gray-300 py-16 p-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="WatchUs_Text text-4xl font-bold justify-start flex">
          {content.watchus['watchus.title']}
        </h2>
        <p className="WatchUs_Subtext text-[1.25rem] font-medium flex justify-start">
          {content.watchus['watchus.subtitle']}
        </p>
        <p className="WatchUs_Subtext text-[1.25rem] mb-8 font-medium flex justify-start">
          {content.watchus['watchus.description']}
        </p>
        <div className="WatchUs_Subtext flex text-2xl gap-8 justify-start font-bold mt-12">
          <p>{content.watchus['watchus.liveTagline']}</p>
        </div>
        <div className="flex gap-8 justify-start">
          <Image
            src="/images/YouTube_Symbol_gule.webp"
            alt="YouTube"
            width={76}
            height={60}
          />
          <Image
            src="/images/twitch-gule.webp"
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
