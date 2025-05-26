'use client';

import React, { useEffect, useState } from 'react';

import CommunitySection from '@/app/components/layout/sections/CommunitySection';
import TournamentCalendar from '@/app/tournament/__blocks/TournamentCalendar';
import TournamentCalendarMobile from '@/app/tournament/__blocks/TournamentCalendarMobile';
import NewsAndEventsFlavour from '@/app/tournament/__blocks/TournamentTextBlock';
import '@/core/SCSS/base/layout/l-calendar.scss';

const ResponsiveComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only runs on client
    const checkIsMobile = () => setIsMobile(window.innerWidth > 1024);

    checkIsMobile(); // Run once on mount

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile ? <TournamentCalendar /> : <TournamentCalendarMobile />;
};

const TournamentsPage: React.FC = () => {
  return (
    <div className="tournament-calendar px-4 mb-25">
      <div className="container pt-15 pb-10">
        <h2>
          <NewsAndEventsFlavour />
        </h2>
      </div>
      <div className="tournament-calendar-container">
        <ResponsiveComponent />
      </div>
      <div className="tournament-community">
        <CommunitySection />
      </div>
    </div>
  );
};

export default TournamentsPage;
