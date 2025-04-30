'use client';
import React from 'react';

import LeaderBoardHeader from '@/app/leaderboards/__blocks/LeaderBoardHeader';
import LeaderBoardTable from './__blocks/LeaderBoardTable';

const LeaderboardsPage = () => {
  return (
    <section className="bg-[#0C2A46] text-white py-12 px-6 min-h-screen w-full">
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
