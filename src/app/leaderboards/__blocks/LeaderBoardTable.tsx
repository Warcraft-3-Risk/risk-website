'use client';
import React from 'react';
import { dummyData } from '@/app/leaderboards/__blocks/dummydata';

const LeaderBoardTable: React.FC = () => {
  // Sort the dummy data by ELO in descending order
  const sortedData = [...dummyData].sort((a, b) => b.elo - a.elo);

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-white">
        <thead className="">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">#</th>
            <th className="px-6 py-4 text-left font-semibold">Player</th>
            <th className="px-6 py-4 text-left font-semibold">Score</th>
            <th className="px-6 py-4 text-left font-semibold">Win Rate</th>
            <th className="px-6 py-4 text-left font-semibold">Gold</th>
            <th className="px-6 py-4 text-left font-semibold">ELO</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr
              key={item.id}
              className="odd:bg-[#0C2A46] even:bg-[#123456] hover:bg-[#1A4A6D] transition"
            >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{item.username}</td>
              <td className="px-6 py-4">{item.score}</td>
              <td className="px-6 py-4">{item.winRate}</td>
              <td className="px-6 py-4">{item.gold}</td>
              <td className="px-6 py-4">{item.elo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardTable;
