export const getTournamentDates = (tournaments: { date: string }[]) => {
  return tournaments.map(t => t.date);
};