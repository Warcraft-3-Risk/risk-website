'use client';

import LeaderBoardTable from '@/app/components/layout/sections/leaderboard/LeaderBoardTable';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/leaderboard/l-leaderboard-section.scss';
import CTAButton from '@/app/components/ui/CTAButtons';
import LeaderboardTableMobile from '@/app/leaderboards/__blocks/LeaderBoardTableMobile';
import { useLeaderboardData } from '@/core/utils/UseRealLeaderboard';

export default function LeaderBoardSection() {
  const sortedData = useLeaderboardData(5);

  const calculateWinRate = (wins: number, losses: number): string => {
    const total = wins + losses;
    return total === 0 ? '0%' : `${Math.round((wins / total) * 100)}%`;
  };
  const leaderBoardsContent = content.leaderboards;

  return (
    <section className="leaderboardbackground text-white py-12 px-6">
      <div className="hidden md:block">
        <div className="container mx-auto">
          <h2 className="lbtitle text-4xl font-bold mb-4">
            {leaderBoardsContent['leaderboardsection.title']}
          </h2>
          <p className="description mb-8">
            {leaderBoardsContent['leaderboardsection.description']}
          </p>

          <LeaderBoardTable />
        </div>
      </div>

      <div className="md:hidden">
        <h2 className="lbtitle text-3xl font-bold mb-4">
          {leaderBoardsContent['leaderboardsection.title']}
        </h2>
        <p className="description mb-6">
          {leaderBoardsContent['leaderboardsection.description']}
        </p>

        <LeaderboardTableMobile
          currentItems={sortedData}
          startIndex={0}
          calculateWinRate={calculateWinRate}
        />
      </div>

      <div className="flex justify-end mt-6 container mx-auto">
        <CTAButton
          href="/leaderboards"
          className="bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-600 transition-colors"
          variant="readmore"
        >
          {leaderBoardsContent['leaderboardsection.viewmore']}
        </CTAButton>
      </div>
    </section>
  );
}
