import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/leaderboard/l-leaderboard-header.scss';
import React from 'react';

const leaderboardContent = content.leaderboards;
const LeaderBoardHeader: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="leaderboard-header-title mb-2">
        {leaderboardContent['leaderboardsection.title']}
      </h1>
      <p className="subtitle text-lg">
        {leaderboardContent['leaderboardsection.description']}
      </p>
    </header>
  );
};

export default LeaderBoardHeader;
