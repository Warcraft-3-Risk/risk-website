import React, { useState } from 'react';
import { getTournamentDatesForMonth } from '@/core/hooks/leaderboard/useLeaderboardData';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const TournamentCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
  };

  const isTournamentDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return tournamentDates.includes(dateString);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Tournament Calendar
      </h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-medium text-blue-800">
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
              className={`h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors ${
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
        <div className="mt-6 text-center">
          <p className="text-lg text-black font-medium">
            {selectedDate.toDateString()}
          </p>
          <p
            className={`text-md mt-1 font-semibold ${
              isTournamentDate(selectedDate) ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {isTournamentDate(selectedDate)
              ? 'Tournament Day!'
              : 'No Tournament'}
          </p>
        </div>
      )}
    </div>
  );
};

export default TournamentCalendar;
