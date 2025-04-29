import LeaderBoardTable from '@/app/components/layout/sections/leaderboard/LeaderBoardTable';
import content from '@/app/data/content.json';
import Link from 'next/link';
import '@/core/SCSS/base/sections/s-leaderboard-section.scss';

export default function LeaderBoardSection() {
  return (
    <section className="LeaderboardSection text-white py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          {content.leaderboardsection['leaderboardsection.title']}
        </h2>
        <p className="text-gray-300 mb-8">
          {content.leaderboardsection['leaderboardsection.description']}
        </p>

        <div>
          <LeaderBoardTable />
          <div className="flex justify-end mt-6">
            <Link
              href="/leaderboards"
              className="bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-600 transition-colors"
            >
              {content.leaderboardsection['leaderboardsection.viewmore']}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
