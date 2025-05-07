'use client';

import React from 'react';
import { useLeaderboardData } from '@/core/utils/UseRealLeaderboard';
import '@/core/SCSS/base/layout/leaderboard/l-leaderboard.scss';
import content from '@/app/data/content.json';

const LeaderBoardTable: React.FC = () => {
  const topLeaders = useLeaderboardData(5); // Fetch top 5 by elo

  const calculateWinRate = (wins: number, losses: number): string => {
    const total = wins + losses;
    return total === 0 ? '0%' : `${Math.round((wins / total) * 100)}%`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="LeaderboardTable min-w-full text-white">
        <thead>
          <tr className="tagtitles border-b border-gray-700 text-yellow-500 uppercase text-sm leading-normal">
            <th className="headertable px-6 py-4 text-left font-semibold">
              {content.leaderboards['leaderboardsection.rank']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {content.leaderboards['leaderboardsection.player']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {content.leaderboards['leaderboardsection.elo']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {content.leaderboards['leaderboardsection.wins']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {content.leaderboards['leaderboardsection.losses']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {content.leaderboards['leaderboardsection.winrate']}
            </th>
            <th className="headertable px-6 py-4 text-left font-semibold">
              {content.leaderboards['leaderboardsection.sigma']}
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
              <td className="py-3 px-6">
                <td>{leader.sigma?.toFixed(2)}</td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardTable;
