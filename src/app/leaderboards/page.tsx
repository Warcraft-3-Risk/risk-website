'use client';
import React from 'react';

import LeaderBoardHeader from '@/app/leaderboards/__blocks/LeaderBoardHeader';
import LeaderBoardTable from '@/app/leaderboards/__blocks/LeaderBoardTable';
import '@/core/SCSS/base/layout/leaderboard/l-leaderboard-page.scss';

const LeaderboardsPage = () => {
  return (
    <section className="backgroundblue text-white py-12 px-6 min-h-screen w-full">
      <div className="container w-full flex flex-col items-center">
        <LeaderBoardHeader />

        <div className="w-full rounded-lg">
          <LeaderBoardTable />
        </div>
      </div>
    </section>
  );
};

export default LeaderboardsPage;
