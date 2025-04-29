import React from 'react';

const LeaderBoardHeader: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="titletext text-5xl font-bold mb-2">Leaderboards</h1>
      <p className="subtitle text-lg">
        Check out the top players and their rankings.
      </p>
    </header>
  );
};

export default LeaderBoardHeader;
