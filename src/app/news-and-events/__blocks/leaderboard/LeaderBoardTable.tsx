import type React from 'react';

interface Leader {
  id: number;
  name: string;
  score: number;
  winRate: string;
  gold: number;
  elo: number;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: 'Player 1',
    score: 1500,
    winRate: '75%',
    gold: 1200,
    elo: 1800,
  },
  {
    id: 2,
    name: 'Player 2',
    score: 1400,
    winRate: '68%',
    gold: 1100,
    elo: 1700,
  },
  {
    id: 3,
    name: 'Player 3',
    score: 1300,
    winRate: '60%',
    gold: 900,
    elo: 1600,
  },
  {
    id: 4,
    name: 'Player 4',
    score: 1250,
    winRate: '55%',
    gold: 850,
    elo: 1550,
  },
  {
    id: 5,
    name: 'Player 5',
    score: 1200,
    winRate: '52%',
    gold: 800,
    elo: 1500,
  },
];

const LeaderBoardTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#0C2A46] text-white">
        <thead>
          <tr className="border-b border-gray-700 text-yellow-500 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Rank</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Score</th>
            <th className="py-3 px-6 text-left">Win Rate</th>
            <th className="py-3 px-6 text-left">Gold</th>
            <th className="py-3 px-6 text-left">ELO</th>
          </tr>
        </thead>
        <tbody className="text-gray-200 text-sm">
          {leaders.map((leader, index) => (
            <tr
              key={leader.id}
              className="border-b border-gray-700 hover:bg-[#0a2239] transition-colors"
            >
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6 font-medium">{leader.name}</td>
              <td className="py-3 px-6">{leader.score}</td>
              <td className="py-3 px-6">{leader.winRate}</td>
              <td className="py-3 px-6">{leader.gold}</td>
              <td className="py-3 px-6">{leader.elo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardTable;
