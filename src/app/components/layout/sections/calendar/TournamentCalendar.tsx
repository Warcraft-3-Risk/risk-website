import React, { useState } from 'react';
import { getTournamentDatesForMonth } from '@/core/hooks/leaderboard/useLeaderboardData';
import Modal from '@/app/components/layout/Modal';
import 'react-calendar/dist/Calendar.css';
import '@/core/SCSS/base/layout/l-calendar.scss';

interface Tournament {
  date: string;
  name: string;
  time: string;
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const TournamentCalendar: React.FC = () => {
  const tournaments: Tournament[] = [
    { date: '2025-04-10', name: 'Spring Open 2025', time: '21:00:00' },
    { date: '2025-06-13', name: 'Summer Championship 2025', time: '22:00:00'},
    { date: '2025-04-11', name: 'Spring Casual Tournament', time: '20:00:00' },
  ];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tournamentsOnDate, setTournamentsOnDate] = useState<Tournament[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const tournamentDates = getTournamentDatesForMonth(currentYear, currentMonth);

  const daysInMonth = Array.from(
    { length: lastDayOfMonth.getDate() },
    (_, i) => new Date(currentYear, currentMonth, i + 1),
  );

  const convertToUserTimeZone =(date: string, time: string) => {
    const utcDateTime = new Date(`${date}T${time}Z`);
    return utcDateTime.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });
  }

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

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth} className="month-nav">
          &lt;
        </button>
        <h2>
          {firstDayOfMonth.toLocaleString('default', { month: 'long' })}
        </h2>
        <button onClick={handleNextMonth} className="month-nav">
          &gt;
        </button>
      </div>

      <div className="day-text">
        {daysOfWeek.map((day) => (
          <div key={day} className="week-days">
            {day}
          </div>
        ))}

        {Array.from({ length: firstDayOfMonth.getDay() }).map((_, i) => (
          <div key={`empty-${i}`} className="empty-day"></div>
        ))}

        {daysInMonth.map((date) => {
          const dateStr = date.toDateString();
          const isSelected = selectedDate?.toDateString() === dateStr;
          const isTourDate = isTournamentDate(date);

          return (
            <div
              key={date.toISOString()}
              onClick={() => handleDateClick(date)}
              className={`calendar-dates ${isTourDate ? 'tournament-date' : ''} ${
                isSelected ? 'selected-date' : ''
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <Modal onClose={() => setSelectedDate(null)}>
          <h3 className="modal-header">
            Tournaments on {selectedDate.toLocaleDateString()}
          </h3>
          {tournamentsOnDate.length > 0 ? (
            <ul className="tournament-list">
              {tournamentsOnDate.map((tournament, index) => (
                <li key={index}>
                  {tournament.name} - {convertToUserTimeZone(tournament.date, tournament.time)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-tournaments">No tournaments scheduled for this day.</p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default TournamentCalendar;
