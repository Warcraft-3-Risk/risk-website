'use client';

import React, { useState } from 'react';
import { useLeaderboardData } from '@/core/utils/UseRealLeaderboard';
import LeaderBoardPagination from './LeaderBoardPagination';
import LeaderboardTableMobile from '@/app/leaderboards/__blocks/LeaderBoardTableMobile';
import '@/core/SCSS/base/layout/leaderboard/l-leaderboard-table.scss';
import content from '@/app/data/content.json';

const ITEMS_PER_PAGE = 10;

const LeaderBoardTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const allLeaders = useLeaderboardData();

  const totalPages = Math.ceil(allLeaders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = allLeaders.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const calculateWinRate = (wins: number, losses: number): string => {
    const total = wins + losses;
    return total === 0 ? '0%' : `${Math.round((wins / total) * 100)}%`;
  };

  const leaderboardContent = content.leaderboards;

  return (
    <>
      <div className="hidden md:block">
        <div className="tablecontainer overflow-x-auto w-full">
          <table className="sandborder w-full text-white">
            <thead>
              <tr>
                <th className="headertable px-6 py-4 text-left font-semibold">
                  {leaderboardContent['leaderboardsection.rank']}
                </th>
                <th className="headertable px-6 py-4 text-left font-semibold">
                  {leaderboardContent['leaderboardsection.player']}
                </th>
                <th className="headertable px-6 py-4 text-left font-semibold">
                  {leaderboardContent['leaderboardsection.elo']}
                </th>
                <th className="headertable px-6 py-4 text-left font-semibold">
                  {leaderboardContent['leaderboardsection.wins']}
                </th>
                <th className="headertable px-6 py-4 text-left font-semibold">
                  {leaderboardContent['leaderboardsection.losses']}
                </th>
                <th className="headertable px-6 py-4 text-left font-semibold">
                  {leaderboardContent['leaderboardsection.winrate']}
                </th>
                <th className="headertable px-6 py-4 text-left font-semibold">
                  {leaderboardContent['leaderboardsection.sigma']}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={item.id}
                  className="odd:bg-[#0C2A46] even:bg-[#123456] hover:bg-[#1A4A6D] transition"
                >
                  <td className="contexttext px-6 py-4">
                    {startIndex + index + 1}
                  </td>
                  <td className="contexttext px-6 py-4">{item.username}</td>
                  <td className="contexttext px-6 py-4">
                    {item.elo.toFixed(2)}
                  </td>
                  <td className="contexttext px-6 py-4">{item.wins}</td>
                  <td className="contexttext px-6 py-4">{item.losses}</td>
                  <td className="contexttext px-6 py-4">
                    {calculateWinRate(item.wins, item.losses)}
                  </td>
                  <td className="contexttext px-6 py-4">
                    {item.sigma?.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="block md:hidden">
        <LeaderboardTableMobile
          startIndex={startIndex}
          calculateWinRate={calculateWinRate}
          currentItems={currentItems}
        />
      </div>

      <LeaderBoardPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default LeaderBoardTable;
