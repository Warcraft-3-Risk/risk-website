'use client';

import Modal from '@/app/components/layout/Modal';
import { tournamentDates } from '@/core/hooks/calendar/CalendarDates';
import useMonthlyTournamentCalendar from '@/core/hooks/calendar/useMonthlyTournamentCalendar';
import '@/core/SCSS/base/layout/l-calendar.scss';
import { convertToUserTimeZone } from '@/core/utils/dateUtils';
import React from 'react';
import 'react-calendar/dist/Calendar.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Calendar interprets the timezone of the date passed to it as local time, so we need to convert the date to UTC before passing it to the calendar.
// This is a workaround to ensure that the date is interpreted correctly by the calendar.
const TournamentCalendar: React.FC = () => {
  const tournaments = tournamentDates;

  // This const is pulling from the useMonthlyTournamentCalendar hook, which manages the state and logic for the monthly tournament calendar.
  const {
    selectedDate,
    tournamentsOnDate,
    firstDayOfMonth,
    daysInMonth,
    handleDateClick,
    isTournamentDate,
    handlePreviousMonth,
    handleNextMonth,
    setSelectedDate,
  } = useMonthlyTournamentCalendar(tournaments);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth} className="month-nav">
          &lt;
        </button>
        <h2>{firstDayOfMonth.toLocaleString('default', { month: 'long' })}</h2>
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

export default TournamentCalendar;
