export const getTournamentDatesForMonth = (
  year: number,
  month: number,
): string[] => {
  const dates: string[] = [];
  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    const day = date.getDay();
    if (day === 5 || day === 6) {
      dates.push(date.toISOString().split('T')[0]);
    }
    date.setDate(date.getDate() + 1);
  }

  return dates;
};
