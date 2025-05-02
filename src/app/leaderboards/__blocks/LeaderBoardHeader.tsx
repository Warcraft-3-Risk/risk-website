import React from 'react';
import '@/core/SCSS/base/layout/l-leaderboard-header.scss';
import content from '@/app/data/content.json';

const LeaderBoardHeader: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="titletext text-5xl font-bold mb-2">
        {content.leaderboards['leaderboardsection.title']}
      </h1>
      <p className="subtitle text-lg">
        {content.leaderboards['leaderboardsection.description']}
      </p>
    </header>
  );
};

export default LeaderBoardHeader;
