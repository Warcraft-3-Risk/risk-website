import React from 'react';
import '@/core/SCSS/base/layout/l-leaderboard-header.scss';

const LeaderBoardHeader: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="titletext text-5xl font-bold mb-2">LEADERBOARDS</h1>
      <p className="subtitle text-lg">
        Check out the top players and their rankings.
      </p>
    </header>
  );
};

export default LeaderBoardHeader;
