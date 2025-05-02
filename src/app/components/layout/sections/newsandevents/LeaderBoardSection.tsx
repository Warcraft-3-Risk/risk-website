import LeaderBoardTable from '@/app/components/layout/sections/leaderboard/LeaderBoardTable';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/l-leaderboard-section.scss';
import CTAButton from '@/app/components/ui/CTAButtons';

export default function LeaderBoardSection() {
  return (
    <section className="leaderboardbackground text-white py-12 px-6">
      <div className="container mx-auto">
        <h2 className="lbtitle text-4xl font-bold mb-4">
          {content.leaderboards['leaderboardsection.title']}
        </h2>
        <p className="description mb-8">
          {content.leaderboards['leaderboardsection.description']}
        </p>

        <div>
          <LeaderBoardTable />
          <div className="flex justify-end mt-6">
            <CTAButton
              href="/leaderboards"
              className="bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-600 transition-colors"
              variant={'readmore'}
            >
              {content.leaderboards['leaderboardsection.viewmore']}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
