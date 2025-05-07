import React from 'react';

import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';
import TwitchPlayerSection from '@/app/components/layout/sections/newsandevents/TwitchPlayerSection';

const SpecialMentionsSection: React.FC = () => {
  return (
    <section className="Section_Background">
      <div className="container mx-auto px-4">
        <h2 className="titletext text-7xl font-bold text-center">
          {content.specialmentions['specialmentions.title']}
        </h2>
      </div>
      <div className="flex justify-center space-x-[100px] mt-8 text-center">
        <TwitchPlayerSection />
      </div>
    </section>
  );
};

export default SpecialMentionsSection;
