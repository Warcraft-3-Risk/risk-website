import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';

const watchusContent = content.watchus;

const WatchUsSection: React.FC = () => {
  return (
    <section className="WatchUs_Block py-12 px-4 md:py-16 md:px-12">
      <div className="container mx-auto text-left md:text-center">
        <h2 className="watch-us-title text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:justify-start flex">
          {watchusContent['watchus.title']}
        </h2>
        <p className="watch-us-subtitle text-base sm:text-lg font-medium mb-2 md:justify-start flex">
          {watchusContent['watchus.subtitle']}
        </p>
        <p className="watch-us-description text-base sm:text-lg mb-6 font-medium md:justify-start flex">
          {watchusContent['watchus.description']}
        </p>
        <div className="watch-us-tagline flex text-xl sm:text-2xl gap-4 sm:gap-6 justify-start md:justify-start font-bold mt-8">
          <p>{watchusContent['watchus.liveTagline']}</p>
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
