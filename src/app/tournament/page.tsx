import React from 'react';

import TournamentCalendar from '@/app/tournament/__blocks/TournamentCalendar';
import TournamentCalendarMobile from '@/app/tournament/__blocks/TournamentCalendarMobile';
import NewsAndEventsFlavour from '@/app/tournament/__blocks/TournamentTextBlock';

import '@/core/SCSS/base/layout/l-calendar.scss';
import CommunitySection from '@/app/components/layout/sections/CommunitySection';

const TournamentsPage: React.FC = () => {
  return (
    <div className="tournament-calendar px-4 mb-25">
      <div className="container pt-15 pb-10">
        <h2>
          <NewsAndEventsFlavour />
        </h2>
      </div>
      <div className="hidden md:block">
        <TournamentCalendar />
      </div>

      <div className="block md:hidden w-full">
        <TournamentCalendarMobile />
      </div>
      <div className="tournament-community">
        <CommunitySection />
      </div>
    </div>
  );
};

export default TournamentsPage;
