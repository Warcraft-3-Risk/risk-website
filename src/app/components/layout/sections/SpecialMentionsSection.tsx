import React from 'react';

import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';
import TwitchPlayerSection from '@/app/components/layout/sections/TwitchPlayerSection';
const SpecialMentionsSection: React.FC = () => {
  return (
    <section className="Section_Background relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-t from-transparent to-[#1b3449] pointer-events-none z-0" />

      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-[100px] text-center">
          <TwitchPlayerSection />
        </div>
      </div>
    </section>
  );
};

export default SpecialMentionsSection;
