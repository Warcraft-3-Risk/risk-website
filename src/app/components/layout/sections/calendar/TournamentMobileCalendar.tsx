import React, { useState } from 'react';
import { getTournamentDatesForMonth } from '@/core/hooks/leaderboard/useLeaderboardData';
import Modal from '@/app/components/layout/Modal';
// import '@/core/SCSS/base/layout/l-tournament-mobile.scss';

interface Tournament {
  date: string;
  name: string;
  time: string;
}

const TournamentCalendarMobile: React.FC = () => {
  const tournaments: Tournament[] = [
    { date: '2025-04-10', name: 'Spring Open 2025', time: '21:00:00' },
    { date: '2025-06-13', name: 'Summer Championship 2025', time: '22:00:00' },
    { date: '2025-04-11', name: 'Spring Casual Tournament', time: '20:00:00' },
  ];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tournamentsOnDate, setTournamentsOnDate] = useState<Tournament[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const tournamentDates = getTournamentDatesForMonth(currentYear, currentMonth);

  const daysInMonth = Array.from(
    { length: new Date(currentYear, currentMonth + 1, 0).getDate() },
    (_, i) => new Date(currentYear, currentMonth, i + 1)
  );

  const convertToUserTimeZone = (date: string, time: string) => {
    const utcDateTime = new Date(`${date}T${time}Z`);
    return utcDateTime.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const formatted = formatDate(date);
    const matches = tournaments.filter((t) => t.date === formatted);
    setTournamentsOnDate(matches);
  };

  const isTournamentDate = (date: Date) => {
    const dateString = formatDate(date);
    return tournamentDates.includes(dateString);
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  return (
    <div className="tournament-mobile px-4 py-2 text-white">
      <div className="calendar-header flex justify-between items-center mb-4">
        <button onClick={handlePreviousMonth} className="month-nav text-xl">
          &lt;
        </button>
        <h2 className="text-lg font-bold">
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={handleNextMonth} className="month-nav text-xl">
          &gt;
        </button>
      </div>

      <div className="space-y-3">
        {daysInMonth.map((date) => {
          const dateStr = formatDate(date);
          if (!isTournamentDate(date)) return null;

          const tourneys = tournaments.filter((t) => t.date === dateStr);

          return (
            <div
              key={dateStr}
              onClick={() => handleDateClick(date)}
              className="mobilecard rounded border p-3 bg-[#1a1a1a] cursor-pointer"
            >
              <div className="flex justify-between text-sm mb-2">
                <span>{date.toLocaleDateString()}</span>
                <span className="text-gray-400">{tourneys.length} tournament{tourneys.length > 1 ? 's' : ''}</span>
              </div>
              <ul className="text-xs space-y-1">
                {tourneys.map((t, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{t.name}</span>
                    <span>{convertToUserTimeZone(t.date, t.time)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <Modal onClose={() => setSelectedDate(null)}>
          <h3 className="modal-header text-white text-lg mb-2">
            Tournaments on {selectedDate.toLocaleDateString()}
          </h3>
          {tournamentsOnDate.length > 0 ? (
            <ul className="tournament-list text-sm space-y-1">
              {tournamentsOnDate.map((t, i) => (
                <li key={i}>
                  {t.name} - {convertToUserTimeZone(t.date, t.time)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-tournaments text-gray-400">No tournaments on this date.</p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default TournamentCalendarMobile;
