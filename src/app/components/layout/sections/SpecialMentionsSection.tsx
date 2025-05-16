import React from 'react';

import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';
import TwitchPlayerSection from '@/app/components/layout/sections/TwitchPlayerSection';
const SpecialMentionsSection: React.FC = () => {
  return (
    <section className="Section_Background relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-[100px] text-center">
          <TwitchPlayerSection />
        </div>
      </div>
    </section>
  );
};

export default SpecialMentionsSection;
