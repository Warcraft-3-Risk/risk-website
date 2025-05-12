import { useState } from 'react';
import { getTournamentDates } from '@/core/hooks/leaderboard/useLeaderboardData';
import { getMonday } from '@/core/utils/dateUtils';

export interface Tournament {
  date: string;
  name: string;
  time: string;
}

const useTournamentCalendar = (tournaments: Tournament[]) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tournamentsOnDate, setTournamentsOnDate] = useState<Tournament[]>([]);
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(
    getMonday(today),
  );

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const getISOWeekNumber = (date: Date) => {
    const tempDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
    );
    const dayNum = tempDate.getUTCDay() || 7;
    tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
    return Math.ceil(((+tempDate - +yearStart) / 86400000 + 1) / 7);
  };

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

  return {
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
  };
};

export default useTournamentCalendar;
