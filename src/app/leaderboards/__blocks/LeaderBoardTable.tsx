import React, { useState } from 'react';
import { dummyData } from '@/app/leaderboards/__blocks/dummydata';
import LeaderBoardPagination from './LeaderBoardPagination';
import LeaderboardTableMobile from '@/app/leaderboards/__blocks/LeaderBoardTableMobile';
import '@/core/SCSS/base/layout/l-leaderboard-table.scss';
import content from '@/app/data/content.json';

const ITEMS_PER_PAGE = 10;

const LeaderBoardTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = [...dummyData].sort((a, b) => b.elo - a.elo);
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = sortedData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const calculateWinRate = (wins: number, losses: number): string => {
    const total = wins + losses;
    return total === 0 ? '0%' : `${Math.round((wins / total) * 100)}%`;
  };

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="tablecontainer overflow-x-auto w-full">
          <table className="sandborder w-full text-white">
            <thead>
              <tr>
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
                  {content.leaderboards['leaderboardsection.score']}
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
                  <td className="contexttext px-6 py-4">{item.elo}</td>
                  <td className="contexttext px-6 py-4">{item.score}</td>
                  <td className="contexttext px-6 py-4">{item.wins}</td>
                  <td className="contexttext px-6 py-4">{item.losses}</td>
                  <td className="contexttext px-6 py-4">
                    {calculateWinRate(item.wins, item.losses)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden">
        <LeaderboardTableMobile
          currentItems={currentItems}
          startIndex={startIndex}
          calculateWinRate={calculateWinRate}
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
