import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Tournament {
  date: string;
  name: string;
}

const TournamentCalendar = () => {
  const tournaments: Tournament[] = [
    { date: '2025-04-10', name: 'Spring Open 2025' },
    { date: '2025-06-13', name: 'Summer Championship 2025' },
    { date: '2025-04-11', name: 'Spring Casual Tournament' },
  ];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [tournamentsOnDate, setTournamentsOnDate] = useState<Tournament[]>([]);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);

    const filteredTournaments = tournaments.filter(
      (tournament) => tournament.date === formattedDate,
    );
    setTournamentsOnDate(filteredTournaments);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">Tournament Calendar</h2>

      <div className="mt-4 flex justify-center">
        <Calendar
          onClickDay={handleDateClick}
          tileClassName={({ date }) => {
            const formattedDate = formatDate(date);
            const isTournamentDay = tournaments.some(
              (tournament) => tournament.date === formattedDate,
            );

            return isTournamentDay ? 'bg-red-500 text-black' : '';
          }}
        />
      </div>

      {selectedDate && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            Tournaments on {selectedDate.toLocaleDateString()}
          </h3>
          {tournamentsOnDate.length > 0 ? (
            <ul className="list-disc pl-5 mt-2">
              {tournamentsOnDate.map((tournament, index) => (
                <li key={index}>{tournament.name}</li>
              ))}
            </ul>
          ) : (
            <p>No tournaments scheduled for this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TournamentCalendar;
