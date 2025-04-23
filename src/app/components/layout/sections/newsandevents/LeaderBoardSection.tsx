import LeaderBoardTable from '@/app/components/layout/sections/leaderboard/LeaderBoardTable';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import content from '@/app/data/content.json';

export default function LeaderBoardSection({ loading }: { loading: boolean }) {
  return (
    <section className="bg-[#0C2A46] text-white py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          {content.leaderboardsection['leaderboardsection.title']}
        </h2>
        <p className="text-gray-300 mb-8">
          {content.leaderboardsection['leaderboardsection.description']}
        </p>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <LeaderBoardTable />
            <div className="flex justify-end mt-6">
              <a
                href="/leaderboards"
                className="bg-yellow-500 text-black px-4 py-2 font-medium hover:bg-yellow-600 transition-colors"
              >
                {content.leaderboardsection['leaderboardsection.viewmore']}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
