'use client';

import React, { useState } from 'react';
import { getTournamentDates } from '@/core/hooks/leaderboard/useLeaderboardData';
import { convertToUserTimeZone, getMonday } from '@/core/utils/dateUtils';
import Modal from '@/app/components/layout/Modal';
import '@/core/SCSS/base/layout/l-calendar.scss';

interface Tournament {
  date: string;
  name: string;
  time: string;
}

const TournamentCalendarMobile: React.FC = () => {
  const tournaments: Tournament[] = [
    { date: '2025-04-30', name: 'Spring Open 2025', time: '21:00:00' },
    { date: '2025-05-02', name: 'Spring Open 2025', time: '21:00:00' },
    { date: '2025-06-13', name: 'Summer Championship 2025', time: '22:00:00' },
    { date: '2025-05-01', name: 'Spring Casual Tournament', time: '20:00:00' },
  ];

  const getWeekHeading = () => {
    const today = new Date();
    const thisWeekStart = getMonday(today);
  
    const diffInMs = currentWeekStart.getTime() - thisWeekStart.getTime();
    const differenceInWeeks = Math.round(diffInMs / (7 * 24 * 60 * 60 * 1000));
  
    if (differenceInWeeks === 0) return 'This Week';
    if (differenceInWeeks === -1) return 'Last Week';
    if (differenceInWeeks === 1) return 'Next Week';
  
    return differenceInWeeks > 0
      ? `In ${differenceInWeeks} Weeks`
      : `${Math.abs(differenceInWeeks)} Weeks Ago`;
  };

  const today = new Date();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tournamentsOnDate, setTournamentsOnDate] = useState<Tournament[]>([]);
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(getMonday(today));

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(currentWeekStart);
    d.setDate(currentWeekStart.getDate() + i);
    return d;
  });

  const tournamentDates = getTournamentDates(tournaments);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const filtered = tournaments.filter((t) => t.date === formatDate(date));
    setTournamentsOnDate(filtered);
  };

  const handlePreviousWeek = () => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(newWeekStart);
  };

  const handleNextWeek = () => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newWeekStart);
  };

  const isTournamentDate = (date: Date) => {
    return tournamentDates.includes(formatDate(date));
  };

  return (
    <div className="calendar-mobile-container">
      

    <div className="week-changer">
      <button onClick={handlePreviousWeek} className="week-nav">
        &lt;
      </button>
      <h2>{getWeekHeading()}</h2>
      <button onClick={handleNextWeek} className="week-nav">
        &gt;
      </button>
    </div>

      <div className="days-container">
        {daysOfWeek.map((date) => {
          const isToday = formatDate(date) === formatDate(today);
          const isSelected =
            selectedDate && formatDate(date) === formatDate(selectedDate);
            const isTour = isTournamentDate(date);

          return (
            <div
              key={date.toISOString()}
              onClick={() => handleDateClick(date)}
              className={`day ${
                isSelected ? 'selected' : ''
              } ${isToday ? 'today' : ''}`}
            >
              <div className="weekday">
                {date.toLocaleDateString(undefined, { weekday: 'short' })}
              </div>
              <div className="date">{date.getDate()}</div>
              {isTour && (
                <div className="tournament-indicator" />
              )}
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
                  {tournament.name} -{' '}
                  {convertToUserTimeZone(tournament.date, tournament.time)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-tournaments">
              No tournaments scheduled for this day.
            </p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default TournamentCalendarMobile;