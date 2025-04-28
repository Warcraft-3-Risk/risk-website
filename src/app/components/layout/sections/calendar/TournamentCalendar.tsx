import React, { useState } from 'react';
import { getTournamentDatesForMonth } from '@/core/hooks/leaderboard/useLeaderboardData';
import Modal from '@/app/components/layout/Modal';
import 'react-calendar/dist/Calendar.css';

interface Tournament {
  date: string;
  name: string;
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//TODO: Make functional database for tournaments and events through Firebase
const TournamentCalendar: React.FC = () => {
  const tournaments: Tournament[] = [
    { date: '2025-04-10', name: 'Spring Open 2025' },
    { date: '2025-06-13', name: 'Summer Championship 2025' },
    { date: '2025-04-11', name: 'Spring Casual Tournament' },
  ];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [tournamentsOnDate, setTournamentsOnDate] = useState<Tournament[]>([]);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const tournamentDates = getTournamentDatesForMonth(year, month);

  const daysInMonth = Array.from(
    { length: lastDayOfMonth.getDate() },
    (_, i) => new Date(year, month, i + 1),
  );

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);

    const filteredTournaments = tournaments.filter(
      (tournament) => tournament.date === formattedDate,
    );
    setTournamentsOnDate(filteredTournaments);
  };

  const isTournamentDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return tournamentDates.includes(dateString);
  };

  return (
    <div className="Calendar-container p-6 bg-white rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="calendar-header text-2xl font-bold text-center mb-6 text-blue-700">
        Tournament Calendar
      </h2>
      <div className="day-text grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="week-days font-medium text-blue-800">
            {day}
          </div>
        ))}

        {Array.from({ length: firstDayOfMonth.getDay() }).map((_, i) => (
          <div key={`empty-${i}`} className="h-10"></div>
        ))}

        {daysInMonth.map((date) => {
          const dateStr = date.toDateString();
          const isSelected = selectedDate?.toDateString() === dateStr;
          const isTourDate = isTournamentDate(date);

          return (
            <div
              key={date.toISOString()}
              onClick={() => handleDateClick(date)}
              className={`calendar-dates h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors ${
                isTourDate
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-100 hover:bg-gray-200'
              } ${isSelected ? 'ring-2 ring-blue-600' : ''}`}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <Modal onClose={() => setSelectedDate(null)}>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
            Tournaments on {selectedDate.toLocaleDateString()}
          </h3>
          {tournamentsOnDate.length > 0 ? (
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              {tournamentsOnDate.map((tournament, index) => (
                <li key={index}>{tournament.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">No tournaments scheduled for this day.</p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default TournamentCalendar;
