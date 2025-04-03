'use client';
import TournamentHeader from './__blocks/TournamentHeader';
import TournamentCalendar from './__blocks/calendar/TournamentCalendar';

const TournamentPage = () => {
  return (
    <div className="container mx-auto p-4">
      <TournamentHeader />
      <TournamentCalendar />
    </div>
  );
};

export default TournamentPage;
