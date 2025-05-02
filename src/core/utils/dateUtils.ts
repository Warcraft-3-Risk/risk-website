/**
 * Formats a date in DD-MM-YYYY format
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export const getMonday = (date: Date): Date => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  d.setDate(d.getDate() + diff);
  return d;
};

export const convertToUserTimeZone = (date: string, time: string) => {
  const utcDateTime = new Date(`${date}T${time}Z`);
  return utcDateTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });
};