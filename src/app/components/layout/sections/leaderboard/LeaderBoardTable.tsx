'use client';
import React from 'react';
import { dummyData } from '@/app/leaderboards/__blocks/dummydata';
import '@/core/SCSS/base/layout/l-leaderboard.scss';

const LeaderBoardTable: React.FC = () => {
  const topLeaders = [...dummyData].sort((a, b) => b.elo - a.elo).slice(0, 5);

  const calculateWinRate = (wins: number, losses: number): string => {
    const total = wins + losses;
    return total === 0 ? '0%' : `${Math.round((wins / total) * 100)}%`;
  };

  return (
    <div className="overflow-x-auto">
<<<<<<< HEAD
      <table className="LeaderboardTable min-w-full text-white">
=======
      <table className="min-w-full text-white">
>>>>>>> origin/development
        <thead>
          <tr className="tagtitles border-b border-gray-700 text-yellow-500 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Rank</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">ELO</th>
            <th className="py-3 px-6 text-left">Score</th>
            <th className="py-3 px-6 text-left">Wins</th>
            <th className="py-3 px-6 text-left">Losses</th>
            <th className="py-3 px-6 text-left">Win Rate</th>
            <th className="py-3 px-6 text-left">Gold</th>
          </tr>
        </thead>
        <tbody className="text-gray-200 text-sm">
          {topLeaders.map((leader, index) => (
            <tr
              key={leader.id}
              className="scoretext border-b border-gray-700 hover:bg-[#0a2239] transition-colors"
            >
              <td className="py-3 px-6">{index + 1}</td>
<<<<<<< HEAD
              <td className="player-name py-3 px-6">{leader.username}</td>
=======
              <td className="py-3 px-6 font-medium">{leader.username}</td>
              <td className="py-3 px-6">{leader.elo}</td>
>>>>>>> origin/development
              <td className="py-3 px-6">{leader.score}</td>
              <td className="py-3 px-6">{leader.wins}</td>
              <td className="py-3 px-6">{leader.losses}</td>
              <td className="py-3 px-6">
                {calculateWinRate(leader.wins, leader.losses)}
              </td>
              <td className="py-3 px-6">{leader.gold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardTable;
