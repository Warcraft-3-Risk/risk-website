// src/app/tournaments/__blocks/TournamentTable.tsx
const TournamentTable = () => {
  const tournaments = [
    { id: 1, name: 'Spring Open 2025', players: 16, date: 'April 20, 2025' },
    {
      id: 2,
      name: 'Summer Championship 2025',
      players: 32,
      date: 'June 15, 2025',
    },
  ];

  return (
    <table className="min-w-full table-auto mt-6">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 text-left">Tournament</th>
          <th className="py-2 px-4 text-left">Players</th>
          <th className="py-2 px-4 text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        {tournaments.map((tournament) => (
          <tr key={tournament.id} className="border-t">
            <td className="py-2 px-4">{tournament.name}</td>
            <td className="py-2 px-4">{tournament.players}</td>
            <td className="py-2 px-4">{tournament.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TournamentTable;
