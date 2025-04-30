'use client';

import React, { useState } from 'react';
import { getTournamentDatesForMonth } from '@/core/hooks/leaderboard/useLeaderboardData';
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
    { date: '2025-06-13', name: 'Summer Championship 2025', time: '22:00:00' },
    { date: '2025-05-01', name: 'Spring Casual Tournament', time: '20:00:00' },
  ];

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tournamentsOnDate, setTournamentsOnDate] = useState<Tournament[]>([]);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const tournamentDates = getTournamentDatesForMonth(
    today.getFullYear(),
    today.getMonth(),
  );

  const convertToUserTimeZone = (date: string, time: string) => {
    const utcDateTime = new Date(`${date}T${time}Z`);
    return utcDateTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const filtered = tournaments.filter((t) => t.date === formatDate(date));
    setTournamentsOnDate(filtered);
  };

  const isTournamentDate = (date: Date) => {
    return tournamentDates.includes(formatDate(date));
  };

  return (
    <div className="calendar-mobile-container p-4">
      <h2 className="text-lg font-semibold mb-2">This Week</h2>

      <div className="flex overflow-x-auto space-x-3 pb-2">
        {daysOfWeek.map((date) => {
          const isToday = formatDate(date) === formatDate(today);
          const isSelected =
            selectedDate && formatDate(date) === formatDate(selectedDate);
          const isTour = isTournamentDate(date);

          return (
            <div
              key={date.toISOString()}
              onClick={() => handleDateClick(date)}
              className={`flex flex-col items-center justify-center w-14 h-20 rounded-lg cursor-pointer ${
                isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100'
              } ${isToday ? 'border border-blue-500' : ''}`}
            >
              <div className="text-xs">
                {date.toLocaleDateString(undefined, { weekday: 'short' })}
              </div>
              <div className="text-xl font-semibold">{date.getDate()}</div>
              {isTour && (
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1" />
              )}
            </div>
          );
        })}
      </div>

      {selectedDate && tournamentsOnDate.length > 0 && (
        <Modal onClose={() => setSelectedDate(null)}>
          <h3 className="modal-header">
            Tournaments on {selectedDate.toLocaleDateString()}
          </h3>
          <ul className="tournament-list">
            {tournamentsOnDate.map((tournament, index) => (
              <li key={index}>
                {tournament.name} –{' '}
                {convertToUserTimeZone(tournament.date, tournament.time)}
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default TournamentCalendarMobile;
