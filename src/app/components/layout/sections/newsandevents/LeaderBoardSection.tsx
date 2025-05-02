import LeaderBoardTable from '@/app/components/layout/sections/leaderboard/LeaderBoardTable';
import content from '@/app/data/content.json';
<<<<<<< HEAD
import Link from 'next/link';
import '@/core/SCSS/base/sections/s-leaderboard-section.scss';

export default function LeaderBoardSection() {
  return (
    <section className="LeaderboardSection text-white py-12 px-6">
=======
import '@/core/SCSS/base/layout/l-leaderboard-section.scss';
import CTAButton from '@/app/components/ui/CTAButtons';

export default function LeaderBoardSection() {
  return (
    <section className="leaderboardbackground text-white py-12 px-6">
>>>>>>> origin/development
      <div className="container mx-auto">
        <h2 className="lbtitle text-4xl font-bold mb-4">
          {content.leaderboardsection['leaderboardsection.title']}
        </h2>
        <p className="description mb-8">
          {content.leaderboardsection['leaderboardsection.description']}
        </p>

        <div>
          <LeaderBoardTable />
          <div className="flex justify-end mt-6">
            <CTAButton
              href="/leaderboards"
              className="bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-600 transition-colors"
              variant={'readmore'}
            >
              {content.leaderboardsection['leaderboardsection.viewmore']}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
