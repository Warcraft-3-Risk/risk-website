'use client';
import React from 'react';
import { dummyData } from '@/app/leaderboards/__blocks/dummydata';

const LeaderBoardTable: React.FC = () => {
  // Sort by ELO descending and take the top 5
  const topLeaders = [...dummyData].sort((a, b) => b.elo - a.elo).slice(0, 5);

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
          {topLeaders.map((leader, index) => (
            <tr
              key={leader.id}
              className="border-b border-gray-700 hover:bg-[#0a2239] transition-colors"
            >
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6 font-medium">{leader.username}</td>
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
