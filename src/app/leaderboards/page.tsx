export default function LeaderboardPage() {
  const leaderboardData = [
    { rank: 1, name: 'Player1', score: 1500 },
    { rank: 2, name: 'Player2', score: 1400 },
    { rank: 3, name: 'Player3', score: 1300 },
    { rank: 4, name: 'Player4', score: 1200 },
    { rank: 5, name: 'Player5', score: 1100 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Leaderboard</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 font-medium text-gray-700">Rank</th>
              <th className="p-3 font-medium text-gray-700">Name</th>
              <th className="p-3 font-medium text-gray-700">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr
                key={player.rank}
                className="border-t hover:bg-gray-100 transition"
              >
                <td className="p-3">{player.rank}</td>
                <td className="p-3">{player.name}</td>
                <td className="p-3">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
