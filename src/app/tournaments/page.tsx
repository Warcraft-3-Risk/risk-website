'use client';
import TournamentHeader from '@/app/tournaments/__blocks/TournamentHeader';
import TournamentCalendar from '@/app/tournaments/__blocks/calendar/TournamentCalendar';

//TODO: This is the tournament page, which will show the tournament calendar and the tournament header.
const TournamentPage = () => {
  return (
    <div className="container mx-auto p-4">
      <TournamentHeader />
      <TournamentCalendar />
    </div>
  );
};

export default TournamentPage;
