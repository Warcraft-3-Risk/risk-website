import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';

const WatchUsSection: React.FC = () => {
  return (
    <section className="WatchUs_Block bg-gray-300 py-12 px-4 md:py-16 md:px-12">
      <div className="container mx-auto text-left md:text-center">
        <h2 className="WatchUs_Text text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:justify-center flex">
          {content.watchus['watchus.title']}
        </h2>
        <p className="WatchUs_Subtext text-base sm:text-lg font-medium mb-2 md:justify-start flex">
          {content.watchus['watchus.subtitle']}
        </p>
        <p className="WatchUs_Subtext text-base sm:text-lg mb-6 font-medium md:justify-start flex">
          {content.watchus['watchus.description']}
        </p>
        <div className="WatchUs_Subtext flex text-xl sm:text-2xl gap-4 sm:gap-6 justify-start md:justify-start font-bold mt-8">
          <p>{content.watchus['watchus.liveTagline']}</p>
        </div>
        <div className="flex gap-6 sm:gap-8 justify-start md:justify-start mt-4 sm:mt-6">
          <Image
            src="/images/YouTube_Symbol_gule.webp"
            alt="YouTube"
            width={64}
            height={64}
            className="w-12 sm:w-[76px] h-auto"
          />
          <Image
            src="/images/twitch-gule.webp"
            alt="Twitch"
            width={64}
            height={64}
            className="w-12 sm:w-[76px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WatchUsSection;
