'use client';

import React from 'react';
import { useLeaderboardData } from '@/core/utils/UseRealLeaderboard';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/leaderboard/l-leaderboard-section.scss';
import CTAButton from '@/app/components/ui/CTAButtons';
import LeaderboardTableMobile from '@/app/leaderboards/__blocks/LeaderBoardTableMobile';

export default function LeaderBoardSection() {
  const topLeaders = useLeaderboardData(5);

  const calculateWinRate = (wins: number, losses: number): string => {
    const total = wins + losses;
    return total === 0 ? '0%' : `${Math.round((wins / total) * 100)}%`;
  };

  const leaderboardContent = content.leaderboards;

  return (
    <section className="leaderboardbackground relative text-white py-12 px-6">
      <div className="container mx-auto">
        <h2 className="lbtitle text-4xl font-bold mb-4">
          {leaderboardContent['leaderboardsection.title']}
        </h2>
        <p className="description mb-8">
          {leaderboardContent['leaderboardsection.description']}
        </p>

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
                {topLeaders.map((item, index) => (
                  <tr
                    key={item.id}
                    className="odd:bg-[#0C2A46] even:bg-[#123456] hover:bg-[#1A4A6D] transition"
                  >
                    <td className="contexttext px-6 py-4">{index + 1}</td>
                    <td className="contexttext px-6 py-4">{item.username}</td>
                    <td className="contexttext px-6 py-4">
                      {Math.round(item.elo)}
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

        <div className="md:hidden">
          <LeaderboardTableMobile
            currentItems={topLeaders}
            startIndex={0}
            calculateWinRate={calculateWinRate}
          />
        </div>

        <div className="flex justify-end mt-6">
          <CTAButton
            href="/leaderboards"
            className="bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-600 transition-colors"
            variant="readmore"
          >
            {leaderboardContent['leaderboardsection.viewmore']}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
