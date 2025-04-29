import React from 'react';

const LeaderBoardHeader: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-yellow-500 mb-2">Leaderboards</h1>
      <p className="text-gray-300 text-lg">
        Check out the top players and their rankings.
      </p>
    </header>
  );
};

export default LeaderBoardHeader;
