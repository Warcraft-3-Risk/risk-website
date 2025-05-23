'use client';

import React from 'react';
import { useLeaderboardData } from '@/core/utils/UseRealLeaderboard';
import '@/core/SCSS/base/layout/leaderboard/l-leaderboard.scss';
import content from '@/app/data/content.json';

const LeaderBoardTable: React.FC = () => {
  const topLeaders = useLeaderboardData(5);

  const calculateWinRate = (wins: number, losses: number): string => {
    const total = wins + losses;
    return total === 0 ? '0%' : `${Math.round((wins / total) * 100)}%`;
  };

  const leaderBoardsContent = content.leaderboards;

  return (
    <div className="overflow-x-auto">
      <table className="LeaderboardTable min-w-full text-white">
        <thead>
          <tr className="tagtitles border-b border-gray-700 text-yellow-500 uppercase text-sm leading-normal">
            <th className="headertable px-6 py-4 text-left font-semibold">
              {leaderBoardsContent['leaderboardsection.rank']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {leaderBoardsContent['leaderboardsection.player']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {leaderBoardsContent['leaderboardsection.elo']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {leaderBoardsContent['leaderboardsection.wins']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {leaderBoardsContent['leaderboardsection.losses']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {leaderBoardsContent['leaderboardsection.winrate']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {leaderBoardsContent['leaderboardsection.sigma']}
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-200 text-sm">
          {topLeaders.map((leader, index) => (
            <tr
              key={leader.id}
              className="scoretext border-b border-gray-700 hover:bg-[#0a2239] transition-colors"
            >
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6 font-medium">{leader.username}</td>
              <td className="py-3 px-6">{leader.elo}</td>
              <td className="py-3 px-6">{leader.wins}</td>
              <td className="py-3 px-6">{leader.losses}</td>
              <td className="py-3 px-6">
                {calculateWinRate(leader.wins, leader.losses)}
              </td>
              <td className="py-3 px-6">{leader.sigma?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardTable;
