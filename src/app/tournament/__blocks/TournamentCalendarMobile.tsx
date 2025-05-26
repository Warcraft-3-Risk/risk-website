'use client';

import Modal from '@/app/components/layout/Modal';
import { tournamentDates } from '@/core/hooks/calendar/CalendarDates';
import useTournamentCalendar from '@/core/hooks/calendar/useTournamentCalendar';
import '@/core/SCSS/base/layout/l-calendar.scss';
import { convertToUserTimeZone } from '@/core/utils/dateUtils';
import React from 'react';

const TournamentCalendarMobile: React.FC = () => {
  const tournaments = tournamentDates;

  // This const is pulling from the useTournamentCalendar hook, which manages the state and logic for the tournament calendar.
  const {
    today,
    selectedDate,
    tournamentsOnDate,
    currentWeekStart,
    daysOfWeek,
    getISOWeekNumber,
    handleDateClick,
    handlePreviousWeek,
    handleNextWeek,
    isTournamentDate,
    setSelectedDate,
  } = useTournamentCalendar(tournaments);
  // The useTournamentCalendar hook manages the state and logic for the tournament calendar.
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  return (
    <div className="calendar-mobile-container">
      <div className="week-changer">
        <button
          onClick={handlePreviousWeek}
          className="week-nav"
          aria-label="Previous Week"
        >
          &lt;
        </button>
        <h2>Week {getISOWeekNumber(currentWeekStart)}</h2>
        <button
          onClick={handleNextWeek}
          className="week-nav"
          aria-label="Next Week"
        >
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
              className={`day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
              role="button"
              aria-label={`Select ${date.toLocaleDateString()}`}
            >
              <div className="weekday">
                {date.toLocaleDateString(undefined, { weekday: 'short' })}
              </div>
              <div className="date">{date.getDate()}</div>
              {isTour && <div className="tournament-indicator" />}
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
