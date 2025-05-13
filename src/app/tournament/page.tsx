import React from 'react';

import TournamentCalendar from '@/app/tournament/__blocks/TournamentCalendar';
import TournamentCalendarMobile from '@/app/tournament/__blocks/TournamentCalendarMobile';
import NewsAndEventsFlavour from '@/app/tournament/__blocks/TournamentTextBlock';

import '@/core/SCSS/base/layout/l-calendar.scss';

const TournamentsPage: React.FC = () => {
  return (
    <div className="tournament-calendar px-4 mb-10">
      <div className="container p-4">
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
    </div>
  );
};

export default TournamentsPage;
