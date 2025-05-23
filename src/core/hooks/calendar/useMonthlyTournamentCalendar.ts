import { getTournamentDates } from '@/core/hooks/leaderboard/useLeaderboardData';
import { formatDate } from '@/core/utils/dateUtils';
import { useState } from 'react';

export interface Tournament {
  date: string;
  name: string;
  time: string;
}

const useMonthlyTournamentCalendar = (tournaments: Tournament[]) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tournamentsOnDate, setTournamentsOnDate] = useState<Tournament[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const daysInMonth = Array.from(
    { length: lastDayOfMonth.getDate() },
    (_, i) => new Date(currentYear, currentMonth, i + 1),
  );

  const tournamentDates = getTournamentDates(tournaments);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    const filtered = tournaments.filter((t) => t.date === formattedDate);
    setTournamentsOnDate(filtered);
  };

  const isTournamentDate = (date: Date) => {
    return tournamentDates.includes(formatDate(date));
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

  return {
    selectedDate,
    tournamentsOnDate,
    currentMonth,
    currentYear,
    firstDayOfMonth,
    daysInMonth,
    handleDateClick,
    isTournamentDate,
    handlePreviousMonth,
    handleNextMonth,
    setSelectedDate,
  };
};

export default useMonthlyTournamentCalendar;
